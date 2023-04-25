import { compareDates } from "./compareDates";
import { stringToDate } from "./stringToDate";

export const featureTodeliveryLocationPopup = (feature) => {
  const properties = feature.properties;
  const description = `
        ${
          !properties.vehicleNumber
            ? ""
            : `<p>Vehicle #${properties.vehicleNumber}</p>`
        }
        ${
          !properties.stopNumber
            ? ""
            : `<p>Stop: #${properties.stopNumber} ${properties.location} </p>`
        }
        ${!properties.type ? "" : `<p>Type: ${properties.type}</p>`}
        ${!properties.eta ? "" : `<p>ETA: ${properties.eta}</p>`}
   ${!properties.etd ? "" : `<p>ETD: ${properties.etd}</p>`}
        ${!properties.duration ? "" : `<p>Duration: ${properties.duration}</p>`}
        ${!properties.odometer ? "" : `<p>Odometer: ${properties.odometer}</p>`}
        
        <p>Volume Before Arriving: ${properties.volumeBeforeArriving} </p>
        
        ${
          !properties.volumePickupTotal
            ? ""
            : `<p>Pickup Volume: ${properties.volumePickupTotal} ${
                properties.volumePickupUnique < 2
                  ? ""
                  : `(${properties.volumePickupUnique} shipments)`
              }</p>`
        }
      
        ${
          !properties.volumeDropoffTotal
            ? ""
            : `<p>Dropoff Volume: ${properties.volumeDropoffTotal} ${
                properties.volumeDropoffUnique < 2
                  ? ""
                  : `(${properties.volumeDropoffUnique} shipments)`
              }</p>`
        }

        <p>Volume After Departing: ${properties.volumeAfterDeparting} </p>
        ${
          !properties.vehicleCapacity
            ? ""
            : `<p>Vehicle Capacity: ${properties.vehicleCapacity}</p>`
        }

        ${
          !properties.pickupSlaCount
            ? ""
            : Array(properties.pickupSlaCount)
                .fill(null)
                .map(
                  (v, idx) => `
                    <p>SLA${idx + 1} saved by ${compareDates(
                    stringToDate(properties["pickup-sla-" + idx + "-latest"]),
                    stringToDate(properties.eta)
                  )} (between ${
                    properties["pickup-sla-" + idx + "-earliest"]
                  } and ${properties["pickup-sla-" + idx + "-latest"]})</p>
                    
                    `
                )
        }
        
        `;
  return description;
};
