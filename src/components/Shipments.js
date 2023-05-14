import Button from "@mapbox/mr-ui/button";
import { useMemo, useState } from "react";
import { CreateShipment } from "./CreateShipment";
import { rgba } from "polished";

// import getColor from "number-to-color";
import { slaTimesToLabel } from "../util/slaLabel";
import humanizeDuration from "humanize-duration";
import { MyTable } from "./Table";

export const Shipments = ({
  locations,
  mapSelectedLocation,
  setShipmentSelectedLocation,
  setShipments,
  shipments,
  shipmentsLastUpdated,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const onCreate = (value) => {
    const newshipments = [...shipments].concat(value);
    setModalOpen(false);
    setShipments(newshipments);
  };
  const shipmentGroups = useMemo(() => {
    const groupIdMap = shipments.reduce((p, c) => {
      if (!p[c.groupId]) {
        p[c.groupId] = [];
      }
      p[c.groupId].push(c);
      return p;
    }, {});
    const ordered = Object.keys(groupIdMap).sort((a, b) => a.localeCompare(b));
    return {
      groupIdMap,
      ordered,
    };
  }, [shipmentsLastUpdated]);

  const onDeleteShipmentGroup = (grpId) => {
    if (
      !window.confirm(
        "You are about to delete this shipment. Click OK to delete"
      )
    ) {
      return;
    }
    const newShipments = shipments.filter((v) => v.groupId !== grpId);
    setShipments(newShipments);
  };

  return (
    <div>
      {modalOpen !== true && (
        <Button
          size="medium"
          onClick={() => setModalOpen(true)}
          passthroughProps={{ "aria-label": "Show modal" }}
        >
          Add Shipment
        </Button>
      )}
      {modalOpen && (
        <CreateShipment
          mapSelectedLocation={mapSelectedLocation}
          setShipmentSelectedLocation={setShipmentSelectedLocation}
          onCancel={closeModal}
          onCreate={onCreate}
          locations={locations}
          shipments={shipments}
          shipmentsLastUpdated={shipmentsLastUpdated}
        />
      )}
      {shipmentGroups.ordered.length > 0 && (
        <>
          <p>
            <strong>Shipment Groups</strong>
          </p>
          <MyTable
            headers={[
              "Shipment Count",
              "Dropoff SLA",
              "Pickup SLA",
              "Item Size",
              "Drop off duration",
              "Pick up duration",
              "Requirements",
            ]}
            rows={shipmentGroups.ordered.map((id, idx) => {
              const grp = shipmentGroups.groupIdMap[id];
              const hex = rgba({
                red: Math.floor((idx / shipmentGroups.ordered.length) * 255),
                green: Math.floor(
                  (1 - idx / shipmentGroups.ordered.length) * 255
                ),
                blue: 100,
                alpha: 1,
              });

              return {
                "Shipment Count": grp.length,
                "Item Size": grp[0].size ? grp[0].size.volume : "",
                "Dropoff SLA": grp[0].dropoff_times
                  ? slaTimesToLabel(grp[0].dropoff_times)
                  : "",
                "Pickup SLA": grp[0].pickup_times
                  ? slaTimesToLabel(grp[0].pickup_times)
                  : "",
                "Drop off duration": grp[0].dropoff_duration
                  ? humanizeDuration(grp[0].dropoff_duration * 1000)
                  : "",
                "Pick up duration": grp[0].pickup_duration
                  ? humanizeDuration(grp[0].pickup_duration * 1000)
                  : "",
                Requirements: grp[0].requirements
                  ? grp[0].requirements.join(", ")
                  : "",
                key: grp[0].groupId,
                style: {
                  backgroundColor: hex,
                  cursor: "pointer",
                },
                onClick: () => onDeleteShipmentGroup(id),
              };
            })}
          />
        </>
      )}
    </div>
  );
};
