import { useMemo, useState } from "react";
import ControlText from "@mapbox/mr-ui/control-text";
import Button from "@mapbox/mr-ui/button";
import ControlSwitch from "@mapbox/mr-ui/control-switch";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import TimeInput from "react-time-input";

export const CreateVehicle = ({ locations, onCancel, onCreate }) => {
  const [numberOfVehicles, setNumberOfVehicles] = useState(3);
  const [volumeCapacity, setVolumeCapacity] = useState(100);
  const [endLocation, setEndLocation] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [capabilities, setCapabilities] = useState([]);
  const [currentCapbility, setCurrentCapability] = useState("");

  const [enableEarliestStart, setEnableEarliestStart] = useState(false);
  const [earliestStart, setEarliestStart] = useState("08:00");

  const [enableLatestEnd, setEnableLatestEnd] = useState(false);
  const [latestEnd, setLatestEnd] = useState("19:00");

  const multiLocationDropdown = useMemo(() => {
    return locations.map((v) => ({
      ...v,
      label: v.name,
      value: v.id
    }));
  }, [locations.length]);

  const onSubmit = () => {
    if (!startLocation) {
      alert("startLocation is not set");
      return;
    }
    if (!endLocation) {
      alert("endLocation is not set");
      return;
    }
    const capacities = !volumeCapacity
      ? undefined
      : {
          volume: volumeCapacity
        };
    const vehicleGroupId = uuidv4();
    const date = new Date().toISOString();
    const fmtEarliestStart = !enableEarliestStart
      ? undefined
      : date.substring(0, 11) + earliestStart + ":00Z";
    const fmtLatestEnd = !enableLatestEnd
      ? undefined
      : date.substring(0, 11) + latestEnd + ":00Z";
    const capable = capabilities.length < 1 ? undefined : capabilities;
    const newvehicles = [...Array(numberOfVehicles)].map((_, idx) => {
      return {
        end_location: endLocation.name,
        capacities: capacities,
        capabilities: capable,
        earliest_start: fmtEarliestStart,
        latest_end: fmtLatestEnd,
        groupId: vehicleGroupId,
        name: uuidv4(),
        routing_profile: "mapbox/driving",
        start_location: startLocation.name
      };
    });

    onCreate(newvehicles);
  };
  return (
    <div>
      <div className="prose">
        <label>
          <strong>Number of Vehicles</strong>
        </label>
        <ControlText
          id="basic"
          onChange={(val) => {
            const number = parseInt(val, 10);
            if (isNaN(number)) {
              return;
            }
            setNumberOfVehicles(number);
          }}
          value={numberOfVehicles}
        />
        <label>
          <strong>Start Location</strong>
        </label>
        <Select
          onChange={setStartLocation}
          options={multiLocationDropdown}
          value={startLocation}
        />
        <label>
          <strong>End Location</strong>
        </label>
        <Select
          onChange={setEndLocation}
          options={multiLocationDropdown}
          value={endLocation}
        />

        <label>
          <strong>Volume Capacity</strong>
        </label>
        <ControlText
          id="basic"
          onChange={(val) => {
            const number = parseInt(val, 10);
            if (isNaN(number)) {
              return;
            }
            setVolumeCapacity(number);
          }}
          value={volumeCapacity}
        />

        <p>
          <label>
            <strong>Capabilities</strong>
          </label>
        </p>
        {capabilities.map((r) => {
          return (
            <p key={r}>
              <label>{r}</label>
            </p>
          );
        })}
        <ControlText
          id="basic"
          onChange={setCurrentCapability}
          value={currentCapbility}
          onBlur={() => {
            if (!currentCapbility) {
              return;
            }
            const newRequirements = [...capabilities];
            newRequirements.push(currentCapbility);
            setCapabilities(newRequirements);
            setCurrentCapability("");
          }}
        />
        <label>
          <strong>Start/End</strong>
        </label>
        <ControlSwitch
          id="delivery-sla"
          label="Earliest Start"
          onChange={setEnableEarliestStart}
          value={enableEarliestStart}
        />
        {enableEarliestStart && (
          <TimeInput
            name="example"
            initTime={earliestStart}
            className="s-input-time"
            value={earliestStart}
            onTimeChange={setEarliestStart}
          />
        )}
        <ControlSwitch
          id="delivery-sla"
          label="Latest End"
          onChange={setEnableLatestEnd}
          value={enableLatestEnd}
        />
        {enableLatestEnd && (
          <TimeInput
            name="example"
            initTime={latestEnd}
            className="s-input-time"
            value={latestEnd}
            onTimeChange={setLatestEnd}
          />
        )}
        <div className="my24">
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
