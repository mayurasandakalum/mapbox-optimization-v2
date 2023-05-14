import ControlSwitch from "@mapbox/mr-ui/control-switch";
import { useMemo, useState } from "react";
import ControlSelect from "@mapbox/mr-ui/control-select";
import ControlText from "@mapbox/mr-ui/control-text";
import Button from "@mapbox/mr-ui/button";
import TimeInput from "react-time-input";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import { flatten } from "./../util/flatten";

export const CreateShipment = ({
  locations,
  onCancel,
  onCreate,
  shipments,
  shipmentsLastUpdated,
  setShipmentSelectedLocation,
}) => {
  const [fromLocationType, _setFromLocationType] = useState("");
  const [toLocationType, setToLocationType] = useState("");
  const [fromLocations, setFromLocations] = useState([]);
  const [toLocations, setToLocations] = useState([]);
  const [enablePickupDuration, setEnablePickupDuration] = useState(false);
  const [pickupDuration, setPickupDuration] = useState(0);
  const [pickupDurationNotNumber, setPickupDurationNotNumber] = useState(false);
  const [enableDropoffDuration, setEnableDropoffDuration] = useState(false);
  const [dropoffDuration, setDropoffDuration] = useState(0);
  const [dropoffDurationNotNumber, setDropoffDurationNotNumber] =
    useState(false);
  const [enableDeliveryDropoff, setEnableDeliveryDropoff] = useState(false);
  const [deliveryEarliestDropoff, setDeliveryEarliestDropoff] =
    useState("08:00");
  const [deliveryLatestDropoff, setDeliveryLatestDropoff] = useState("18:00");
  const [enableDeliveryPickup, setEnableDeliveryPickup] = useState(false);
  const [deliveryEarliestPickup, setDeliveryEarliestPickup] = useState("09:00");
  const [deliveryLatestPickup, setDeliveryLatestPickup] = useState("18:00");

  const [enableVolume, setEnableVolume] = useState(false);
  const [volume, setVolume] = useState(0);
  const [volumeNotNumber, setVolumeNotNumber] = useState(false);

  const [currentRequirement, setCurrentRequirement] = useState("");
  const [requirements, setRequirements] = useState([]);

  const shipmentNameHash = useMemo(() => {
    return shipments.reduce((p, l) => {
      p[l.from] = l;
      p[l.to] = l;
      return p;
    }, {});
  }, [shipmentsLastUpdated]);

  const generateStartLocations = (type) => {
    if (type === "custom-locations") {
      return fromLocations;
    }
    if (type === "locations-wo-shipments") {
      return locations.reduce((p, c) => {
        if (shipmentNameHash[c.name]) {
          return p;
        }
        p.push(c);
        return p;
      }, []);
    }
    throw new Error(`Unsupported type for generating locations: ${type}`);
  };

  const generateEndLocations = (type) => {
    if (type === "custom-locations") {
      return toLocations;
    }
    if (type === "locations-wo-shipments") {
      return locations.reduce((p, c) => {
        if (shipmentNameHash[c.name]) {
          return p;
        }
        p.push(c);
        return p;
      }, []);
    }
    throw new Error(`Unsupported type for generating locations: ${type}`);
  };

  const onSubmit = () => {
    const startLocations = generateStartLocations(fromLocationType);
    const endLocations = generateEndLocations(toLocationType);

    if (startLocations.length < 1) {
      alert("from is empty");
      return;
    }
    if (endLocations.length < 1) {
      alert("to is empty");
      return;
    }
    // 2011-10-05T14:48:00.000Z -> 2011-10-05T14:48
    const date = new Date().toISOString();
    const size = enableVolume ? { volume: volume } : {};
    const dropoffSLAExists = enableDeliveryDropoff;
    const pickupSLAExists = enableDeliveryPickup;
    const pickupTimes = pickupSLAExists
      ? [
          {
            earliest: date.substring(0, 11) + deliveryEarliestPickup + ":00Z",
            latest: date.substring(0, 11) + deliveryLatestPickup + ":00Z",
            type: "strict",
          },
        ]
      : undefined;
    const dropoffTimes = dropoffSLAExists
      ? [
          {
            earliest: date.substring(0, 11) + deliveryEarliestDropoff + ":00Z",
            latest: date.substring(0, 11) + deliveryLatestDropoff + ":00Z",
            type: "strict",
          },
        ]
      : undefined;

    const groupId = uuidv4();
    const shipments = startLocations.map((from) => {
      return endLocations.reduce((p, to) => {
        // to prevent a shipment that has same from and to.
        if (to.name === from.name) {
          return p;
        }
        p.push({
          dropoff_duration: dropoffDuration,
          dropoff_times: dropoffTimes,
          from: from.name,
          groupId: groupId,
          name: uuidv4(),
          pickup_times: pickupTimes,
          pickup_duration: pickupDuration,
          requirements,
          size,
          to: to.name,
        });
        return p;
      }, []);
    });
    const formattedShipments = flatten(shipments);
    shipments.flat();
    onCreate(formattedShipments);
  };
  const setFromLocationType = (value) => {
    _setFromLocationType(value);
    setShipmentSelectedLocation({
      type: value,
      locations: value === "custom-locations" ? fromLocations : [],
    });
  };

  const multiLocationDropdown = useMemo(() => {
    return locations.map((v) => ({
      ...v,
      label: v.name,
      value: v.id,
    }));
  }, [locations.length]);

  const setFromMultiSelectedOption = (val) => {
    setShipmentSelectedLocation({
      type: fromLocationType,
      locations: fromLocationType === "custom-locations" ? val : [],
    });
    setFromLocations(val);
  };
  const setToMultiSelectedOption = (val) => {
    setShipmentSelectedLocation({
      type: toLocationType,
      locations: toLocationType === "custom-locations" ? val : [],
    });
    setToLocations(val);
  };

  const showFromLocations = () => {
    if (fromLocationType !== "custom-locations") {
      return;
    }
    console.log("fromLocations", fromLocations);
    return (
      <Select
        isMulti
        onChange={setFromMultiSelectedOption}
        options={multiLocationDropdown}
        value={fromLocations}
      />
    );
  };

  const showToLocations = () => {
    if (toLocationType !== "custom-locations") {
      return;
    }
    return (
      <Select
        isMulti
        onChange={setToMultiSelectedOption}
        options={multiLocationDropdown}
        value={toLocations}
      />
    );
  };

  return (
    <div>
      <div className="prose">
        <label>
          <strong>From</strong>
        </label>
        <ControlSelect
          id="from"
          value={fromLocationType}
          onChange={setFromLocationType}
          options={[
            {
              label: "Select One",
              value: "",
            },
            {
              label: "Custom Locations",
              value: "custom-locations",
            },
            {
              label: "Locations w/o Shipments",
              value: "locations-wo-shipments",
            },
            {
              label: "Locations w/o Shipments and Serivces",
              value: "locations-wo-shipments-and-services",
            },
          ]}
        />
        {showFromLocations()}
        <label>
          <strong>To</strong>
        </label>
        <ControlSelect
          id="to"
          value={toLocationType}
          onChange={setToLocationType}
          options={[
            {
              label: "Select One",
              value: "",
            },
            {
              label: "Custom Locations",
              value: "custom-locations",
            },
            {
              label: "Locations w/o Shipments",
              value: "locations-wo-shipments",
            },
            {
              label: "Locations w/o Shipments and Serivces",
              value: "locations-wo-shipments-and-services",
            },
          ]}
        />
        {showToLocations()}

        <label>
          <strong>SLA</strong>
        </label>

        <ControlSwitch
          id="delivery-sla"
          label="Dropoff SLA"
          onChange={setEnableDeliveryDropoff}
          value={enableDeliveryDropoff}
        />
        {enableDeliveryDropoff && (
          <p>
            <label>No earlier than</label>
            <TimeInput
              name="example"
              initTime={deliveryEarliestDropoff}
              className="s-input-time"
              value={deliveryEarliestDropoff}
              onTimeChange={setDeliveryEarliestDropoff}
            />
          </p>
        )}

        {enableDeliveryDropoff && (
          <p>
            <label>No later than</label>
            <TimeInput
              name="example"
              initTime={deliveryLatestDropoff}
              className="s-input-time"
              value={deliveryLatestDropoff}
              onTimeChange={setDeliveryLatestDropoff}
            />
          </p>
        )}

        <ControlSwitch
          id="delivery-sla"
          label="Pickup SLA"
          onChange={setEnableDeliveryPickup}
          value={enableDeliveryPickup}
        />
        {enableDeliveryPickup && (
          <p>
            <label>No earlier than</label>
            <TimeInput
              name="example"
              initTime={deliveryEarliestPickup}
              className="s-input-time"
              value={deliveryEarliestPickup}
              onTimeChange={setDeliveryEarliestPickup}
            />
          </p>
        )}

        {enableDeliveryPickup && (
          <p>
            <label>No later than</label>
            <TimeInput
              name="example"
              initTime={deliveryLatestPickup}
              className="s-input-time"
              value={deliveryLatestPickup}
              onTimeChange={setDeliveryLatestPickup}
            />
          </p>
        )}

        <p>
          <strong>Size</strong>
        </p>
        <ControlSwitch
          id="delivery-sla"
          label="Volume"
          onChange={setEnableVolume}
          value={enableVolume}
        />
        {enableVolume && (
          <ControlText
            id="more-options"
            type="email"
            validationError={volumeNotNumber ? "must be a number" : ""}
            errorStyle="inline"
            onChange={(value) => {
              const val = parseInt(value, 10);
              if (isNaN(val)) {
                setVolumeNotNumber(true);
                return;
              }
              if (volumeNotNumber === true) {
                setVolumeNotNumber(false);
              }
              setVolume(val);
            }}
            value={String(volume)}
            noAuto={true}
          />
        )}

        <p>
          <strong>Location Duration</strong>
        </p>
        <ControlSwitch
          id="pickup-duration"
          label="Pick Up duration (seconds)"
          onChange={setEnablePickupDuration}
          value={enablePickupDuration}
        />
        {enablePickupDuration && (
          <ControlText
            id="more-options"
            type="email"
            validationError={pickupDurationNotNumber ? "must be a number" : ""}
            errorStyle="inline"
            onChange={(value) => {
              const val = parseInt(value, 10);
              if (isNaN(val)) {
                setPickupDurationNotNumber(true);
                return;
              }
              if (pickupDurationNotNumber === true) {
                setDropoffDurationNotNumber(false);
              }
              setPickupDuration(val);
            }}
            value={String(pickupDuration)}
            noAuto={true}
          />
        )}

        <ControlSwitch
          id="dropoff-duration"
          label="Drop Off duration (seconds)"
          onChange={setEnableDropoffDuration}
          value={enableDropoffDuration}
        />
        {enableDropoffDuration && (
          <ControlText
            id="more-options"
            type="text"
            validationError={dropoffDurationNotNumber ? "must be a number" : ""}
            errorStyle="inline"
            onChange={(value) => {
              const val = parseInt(value, 10);
              if (isNaN(val)) {
                setDropoffDurationNotNumber(true);
                return;
              }
              if (dropoffDurationNotNumber === true) {
                setDropoffDurationNotNumber(false);
              }
              setDropoffDuration(val);
            }}
            value={String(dropoffDuration)}
            noAuto={true}
          />
        )}

        <p>
          <label>
            <strong>Requirements</strong>
          </label>
        </p>
        {requirements.map((r) => {
          return (
            <p key={r}>
              <label>{r}</label>
            </p>
          );
        })}
        <ControlText
          id="basic"
          onChange={setCurrentRequirement}
          value={currentRequirement}
          onBlur={() => {
            if (!currentRequirement) {
              return;
            }
            const newRequirements = [...requirements];
            newRequirements.push(currentRequirement);
            setRequirements(newRequirements);
            setCurrentRequirement("");
          }}
        />
        <Button
          size="small"
          onClick={() => {
            setCurrentRequirement("");
          }}
          passthroughProps={{ "aria-label": "Show modal" }}
        >
          Add Requirement
        </Button>

        <div className="my8">
          <Button
            size="medium"
            className="my8"
            variant="discouraging"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button size="medium" className="my8" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
