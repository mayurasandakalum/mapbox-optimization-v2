import { useMemo } from "react";
import { dateFmt } from "../util/dateFmt";
import getColor from "number-to-color";
import { rgba } from "polished";
import { MyTable } from "./Table";

export const SolutionSheet = ({
  selectedSolutionDeliveryVehicleId,
  setSelectedSolutionDeliveryVehicleId,
  solution,
  vehiclesLastUpdated,
}) => {
  const vehicles = solution.vehicles;

  const vehicleMap = useMemo(() => {
    return vehicles.reduce((p, c) => {
      if (!p[c.name]) {
        p[c.name] = c;
      }
      return p;
    }, {});
  }, [vehiclesLastUpdated]);

  const formattedSolutions = useMemo(() => {
    return solution.solution.routes.map((r, idx, arr) => {
      const firstStop = r.stops.length > 0 ? r.stops[0] : null;
      const lastStop = r.stops.length > 0 ? r.stops[r.stops.length - 1] : null;
      const startTime = firstStop ? dateFmt(firstStop.eta) : "";
      const endTime = lastStop ? dateFmt(lastStop.eta) : "";

      // const rgb = getColor(idx, arr.length);
      // const hex = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`;

      const hex = rgba({
        red: Math.floor((idx / arr.length) * 255),
        green: Math.floor((1 - idx / arr.length) * 255),
        blue: 100,
        alpha: 1,
      });

      console.log("2hex", hex);
      return {
        ...r,
        startTime,
        endTime,
        hex,
      };
    });
  }, [solution.id]);

  const usedVehiclesMap = useMemo(() => {
    return solution.solution.routes.reduce((p, c, idx, arr) => {
      if (!p[c.vehicle]) {
        p[c.vehicle] = c;
      }
      return p;
    }, {});
  }, [solution.id]);

  return formattedSolutions.length === 0 && vehicles.length === 0 ? null : (
    <MyTable
      headers={["Vehicle", "# of Stops", "Start Time", "End Time", "Capacity"]}
      rows={formattedSolutions
        .map((r, idx) => {
          const capacity =
            vehicleMap[r.vehicle] &&
            vehicleMap[r.vehicle].capacities &&
            vehicleMap[r.vehicle].capacities.volume
              ? vehicleMap[r.vehicle].capacities.volume
              : null;
          const color =
            !selectedSolutionDeliveryVehicleId ||
            r.vehicle === selectedSolutionDeliveryVehicleId
              ? r.hex
              : "";

          console.log("color", color);

          return {
            Vehicle: idx + 1,
            "# of Stops": r.stops.length,
            "Start Time": r.startTime,
            "End Time": r.endTime,
            Capacity: capacity,
            onClick: () =>
              r.vehicle === selectedSolutionDeliveryVehicleId
                ? setSelectedSolutionDeliveryVehicleId(null)
                : setSelectedSolutionDeliveryVehicleId(r.vehicle),
            style: {
              cursor: "pointer",
              height: "100%",
              width: "50px",
              backgroundColor: color,
            },
            key: r.vehicle,
          };
        })
        .concat(
          //  show unused vehicles
          vehicles.reduce(
            (p, v) => {
              if (usedVehiclesMap[v.name]) {
                return p;
              }

              const newIdx = p.idx + 1;
              p.items.push({
                Vehicle: formattedSolutions.length + newIdx,
                "# of Stops": 0,
                "Start Time": "n/a",
                "End Time": "n/a",
                Capacity: v.capacities ? v.capacities.volume : "n/a",
                key: v.name,
                style: {},
              });
              return {
                idx: newIdx,
                items: p.items,
              };
            },
            { idx: 0, items: [] }
          ).items
        )}
    />
  );
};
