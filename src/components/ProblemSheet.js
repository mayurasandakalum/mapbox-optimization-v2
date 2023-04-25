import TabList from "@mapbox/mr-ui/tab-list";
import { Locations } from "./Locations";
import { useState } from "react";
import { Shipments } from "./Shipments";
import { Vehicles } from "./Vehicles";

export const ProblemSheet = ({
  locations,
  mapBbox,
  mapSelectedLocation,
  problemTab,
  setShipmentSelectedLocations,
  setLocations,
  setProblemTab,
  setShipments,
  setUseFakeNames,
  shipments,
  shipmentsLastUpdated,
  setVehicles,
  useFakeNames,
  vehicles,
  vehiclesLastUpdated
}) => {
  const [shipmentSelectedLocation, _setShipmentSelectedLocation] = useState(
    null
  );

  const setShipmentSelectedLocation = (value) => {
    _setShipmentSelectedLocation(value);
    if (value.type === "custom-locations") {
      setShipmentSelectedLocations(value.locations);
    } else if (value.type === "locations-wo-shipments") {
      // TODO find locations without shipments
    } else if (value.type === "locations-wo-shipments-services") {
      // TODO find locations without shipments and services
    }
  };
  return (
    <div>
      <div className="my6">
        <TabList
          onChange={setProblemTab}
          activeItem={problemTab}
          items={[
            { id: "locations", label: "Locations" },
            { id: "shipments", label: "Shipments" },
            // { id: "services", label: "Services" },
            { id: "vehicles", label: "Vehicles" }
          ]}
        />
        {problemTab === "locations" && (
          <>
            <p
              variant="minor"
              className="my6"
              style={{ fontSize: "11px", maxWidth: "400px" }}
            >
              A location is a physical point in space that needs to be visited
              by the vehicles in your problem.
            </p>
            <Locations
              locations={locations}
              mapBbox={mapBbox}
              setLocations={setLocations}
              shipments={shipments}
              shipmentsLastUpdated={shipmentsLastUpdated}
              setShipments={setShipments}
              setVehicles={setVehicles}
              setUseFakeNames={setUseFakeNames}
              useFakeNames={useFakeNames}
              vehicles={vehicles}
              vehiclesLastUpdated={vehiclesLastUpdated}
            />
          </>
        )}
        {problemTab === "shipments" && (
          <>
            <p
              variant="minor"
              className="my6"
              style={{ fontSize: "11px", maxWidth: "400px" }}
            >
              Shipments represent the movement of things - they need to be
              picked up at one place and delivered to another.
            </p>
            <Shipments
              locations={locations}
              mapSelectedLocation={mapSelectedLocation}
              setShipmentSelectedLocation={setShipmentSelectedLocation}
              shipments={shipments}
              setShipments={setShipments}
              shipmentsLastUpdated={shipmentsLastUpdated}
            />
          </>
        )}
        {/* {problemTab === "services" && (
            <>
              <p
                variant="minor"
                className="my6"
                style={{ fontSize: "11px", maxWidth: "400px" }}
              >
                Services are locations that simply need to be visited. They do
                not consume or relieve any capacity of the vehicle that visits
                them.
              </p>
              <Shipments />
            </>
          )} */}
        {problemTab === "vehicles" && (
          <>
            <p
              variant="minor"
              className="my6"
              style={{ fontSize: "11px", maxWidth: "400px" }}
            >
              A vehicle is a thing that travels around visiting locations.
              You'll need at least one vehicle in order to come up with a
              solution.
            </p>
            <Vehicles
              locations={locations}
              vehicles={vehicles}
              vehiclesLastUpdated={vehiclesLastUpdated}
              setVehicles={setVehicles}
            />
          </>
        )}
      </div>
    </div>
  );
};
