import ControlSwitch from "@mapbox/mr-ui/control-switch";
import { generateLocation } from "../util/geenrateLocation";
import { MyTable } from "./Table";
import ControlText from "@mapbox/mr-ui/control-text";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMemo, useState } from "react";
import Button from "@mapbox/mr-ui/button";
import Buttons from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import { useEffect } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};

export const Locations = ({
  mapBbox,
  locations,
  setShipments,
  shipments,
  shipmentsLastUpdated,
  setLocations,
  setVehicles,
  setUseFakeNames,
  useFakeNames,
  vehicles,
  vehiclesLastUpdated,
}) => {
  const [editNameTo, setEditNameTo] = useState("");
  const [editLocationModalOpen, setEditLocationModalOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState(null);

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [points, setPoints] = useState(null);

  const handleAdd = () => {
    setPoints({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      customerName: customerName,
    });
    setLat("");
    setLng("");
    setCustomerName("");
  };

  useEffect(() => {
    onAddLocations(points);
  }, [points]);

  const onAddLocations = (pointValue) => {
    console.log("pointValue", pointValue);
    if (pointValue === null) {
      return;
    }

    const newLocations = generateLocation(
      pointValue.lng,
      pointValue.lat,
      pointValue.customerName
    );
    console.log("newLocations: ", newLocations);
    setLocations(locations.concat(newLocations));
  };

  const onStartLocationEdit = (l) => {
    setEditingLocation(l);
    setEditLocationModalOpen(true);
  };
  const onCancelEdit = () => {
    setEditingLocation(null);
    setEditLocationModalOpen(false);
    setEditNameTo("");
  };
  const onSaveEditName = () => {
    if (!editNameTo) {
      alert("Name cannot be empty");
      return;
    }
    // if this location belongs to a shipment, update shipment name?
    if (shipmentsPerLocation[editingLocation.name]) {
      const newShipments = shipments.map((v) => {
        let newFrom = v.from;
        let newTo = v.to;
        if (v.from === editingLocation.name) {
          newFrom = editNameTo;
        }
        if (v.to === editingLocation.name) {
          newTo = editNameTo;
        }
        return {
          ...v,
          from: newFrom,
          to: newTo,
        };
      });
      setShipments(newShipments);
    }

    // if vehicles are attached to this name, then update those too
    if (
      vehiclesStartLocation[editingLocation.name] ||
      vehiclesEndLocation[editingLocation.name]
    ) {
      const newVehicles = vehicles.map((v) => {
        let newStart = v.start_location;
        let newEnd = v.end_location;
        if (v.start_location === editingLocation.name) {
          newStart = editNameTo;
        }
        if (v.end_location === editingLocation.name) {
          newEnd = editNameTo;
        }
        return {
          ...v,
          start_location: newStart,
          end_location: newEnd,
        };
      });
      setVehicles(newVehicles);
      console.log("updated vehicles");
    }

    const newlocations = locations.map((v) => {
      if (v.name !== editingLocation.name) {
        return v;
      }
      return {
        ...v,
        name: editNameTo,
      };
    });
    setLocations(newlocations);

    onCancelEdit();
  };

  const shipmentsPerLocation = useMemo(() => {
    return shipments.reduce((p, c) => {
      if (!p[c.from]) {
        p[c.from] = 0;
      }
      if (!p[c.to]) {
        p[c.to] = 0;
      }
      p[c.from]++;
      p[c.to]++;
      return p;
    }, {});
  }, [shipmentsLastUpdated]);

  const vehiclesStartLocation = useMemo(() => {
    return vehicles.reduce((p, c) => {
      if (!p[c.start_location]) {
        p[c.start_location] = 0;
      }
      p[c.start_location]++;
      return p;
    }, {});
  }, [vehiclesLastUpdated]);

  const vehiclesEndLocation = useMemo(() => {
    return vehicles.reduce((p, c) => {
      if (!p[c.end_location]) {
        p[c.end_location] = 0;
      }
      p[c.end_location]++;
      return p;
    }, {});
  }, [vehiclesLastUpdated]);

  return (
    <div className="my6">
      <div>
        <Grid
          container
          direction={"row"}
          columnSpacing={4}
          rowSpacing={2}
          sx={{ width: "100%" }}
          justifyContent="center"
        >
          <Grid item>
            <TextField
              label="Latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Longitude"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Buttons
              variant="contained"
              disableElevation
              onClick={handleAdd}
              sx={{ width: "210px", height: "40px", mt: "6px" }}
            >
              Add
            </Buttons>
          </Grid>
        </Grid>
        {/* <ControlSwitch
          id="delivery-sla"
          label="Use mock address"
          onChange={setUseFakeNames}
          value={useFakeNames}
        /> */}
      </div>
      {locations.length > 0 && (
        <>
          <MyTable
            headers={[
              "Name",
              "Shipments Attached",
              "Vechicles Start",
              "Vehicles End",
            ]}
            rows={locations.map((l, idx) => {
              const shipments = shipmentsPerLocation[l.name] || 0;
              const vehiclesStart = vehiclesStartLocation[l.name] || 0;
              const vehiclesEnd = vehiclesEndLocation[l.name] || 0;
              return {
                key: l.coordinates[0] + ":" + l.coordinates[1],
                onClick: () => onStartLocationEdit(l),
                Name: l.name,
                "Shipments Attached": shipments,
                "Vechicles Start": vehiclesStart,
                "Vehicles End": vehiclesEnd,
                style: {
                  cursor: "pointer",
                },
              };
            })}
          />
        </>
      )}
      <Modal
        open={editLocationModalOpen}
        onClose={onCancelEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change location name
          </Typography>
          <ControlText
            id="edit-name"
            type="text"
            onChange={setEditNameTo}
            value={editNameTo}
            noAuto={true}
          />
          <Button size="small" onClick={onCancelEdit} variant="discouraging">
            Cancel
          </Button>
          <Button size="small" onClick={onSaveEditName}>
            Save Edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
