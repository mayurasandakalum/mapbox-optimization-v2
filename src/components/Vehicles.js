import { useMemo, useState } from "react";
import Button from "@mapbox/mr-ui/button";
import { CreateVehicle } from "./CreateVehicle";
import { MyTable } from "./Table";

export const Vehicles = ({
  locations,
  setVehicles,
  vehicles,
  vehiclesLastUpdated
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const vehicleGroups = useMemo(() => {
    const groupIdMap = vehicles.reduce((p, c) => {
      if (!p[c.groupId]) {
        p[c.groupId] = [];
      }
      p[c.groupId].push(c);
      return p;
    }, {});
    const ordered = Object.keys(groupIdMap).sort((a, b) => a.localeCompare(b));
    return {
      groupIdMap,
      ordered
    };
  }, [vehiclesLastUpdated]);

  const onCreate = (value) => {
    const newvehicles = [...vehicles].concat(value);
    setModalOpen(false);
    setVehicles(newvehicles);
  };
  const onDeleteVehicleGroup = (grpId) => {
    if (
      !window.confirm(
        "You are about to delete this vehicle group. Click OK to delete"
      )
    ) {
      return;
    }
    const newVehicles = vehicles.filter((v) => v.groupId !== grpId);
    setVehicles(newVehicles);
  };

  return (
    <div>
      {modalOpen !== true && (
        <Button
          size="medium"
          onClick={() => setModalOpen(true)}
          passthroughProps={{ "aria-label": "Show modal" }}
        >
          Add Vehicle
        </Button>
      )}
      {modalOpen && (
        <CreateVehicle
          onCreate={onCreate}
          onCancel={() => setModalOpen(false)}
          locations={locations}
        />
      )}

      {vehicleGroups.ordered.length > 0 && (
        <>
          <p>
            <strong>Vehicle Groups</strong>
          </p>
          <MyTable
            headers={[
              "# of Vehicles",
              "Capacity",
              "Earliest Start",
              "Latest End",
              "Capabilities"
            ]}
            rows={vehicleGroups.ordered.map((id, idx) => {
              const grp = vehicleGroups.groupIdMap[id];
              return {
                key: grp[0].groupId,
                "# of Vehicles": grp.length,
                Capacity: grp[0].capacities ? grp[0].capacities.volume : "",
                "Earliest Start": grp[0].earliest_start
                  ? grp[0].earliest_start.substring(11, 16)
                  : "",
                "Latest End": grp[0].latest_end
                  ? grp[0].latest_end.substring(11, 16)
                  : "",
                Capabilities: grp[0].capabilities
                  ? grp[0].capabilities.join(", ")
                  : "",
                style: { cursor: "pointer" },
                onClick: () => onDeleteVehicleGroup(id)
              };
            })}
          />
        </>
      )}
    </div>
  );
};
