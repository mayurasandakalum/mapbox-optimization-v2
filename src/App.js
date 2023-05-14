import "./styles.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MapboxMap } from "./components/MapboxMap";
import Button from "@mapbox/mr-ui/button";
import { ProblemSheet } from "./components/ProblemSheet";
import { postRequest } from "./util/postRequest";
import { generateProblemPayload } from "./util/generateProblem";
import {
  mockLocations,
  mockLocations2,
  mockShipments,
  mockShipments2,
  mockSolution,
  mockVehicles,
  mockVehicles2,
} from "./mockData";

import TabList from "@mapbox/mr-ui/tab-list";
import { SolutionSheet } from "./components/SolutionSheet";
import { generateLocation } from "./util/geenrateLocation";

import Fakerator from "fakerator";

var fakerator = Fakerator("en-US");

const optimizeV2Url = "https://api.mapbox.com/optimized-trips/v2";
const token =
  "pk.eyJ1IjoidGFrdXRvc3V6dWtpbWFwYm94IiwiYSI6ImNsMW90NGZnNDA4dW8zZG54eHNrbmh5YXUifQ.qm3KDSXqxvSC19yI5JkFdQ";

const emptySolution = {
  id: null,
  solution: { routes: [] },
  locations: [],
  shipments: [],
  vehicles: [],
};
export default function App() {
  const [appTab, setAppTab] = useState("problem");
  const [problemTab, setProblemTab] = useState("locations");
  const [bbox, setBbox] = useState(null);
  const [isFetchingSolution, setIsFetchingSolution] = useState(false);
  const [useFakeNames, setUseFakeNames] = useState(false);
  const [locations, _setLocations] = useState([]);
  const [locationLastUpdated, setLocationLastUpdated] = useState(
    new Date().getTime()
  );

  useEffect(() => {
    console.log("locations", locations);
  }, [locations]);

  const latlngkey = (coords) => {
    return coords[0] + "," + coords[1];
  };
  const geocodeLocations = async (locations) => {
    const needGeocoding = locations.reduce((p, c) => {
      if (c.geocoded) {
        return p;
      }
      const key = latlngkey(c.coordinates);
      console.log("key", key);
      const res = fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${key}.json?types=address%2Cdistrict%2Clocality&limit=1&access_token=${token}`
      ).then((res) => res.json());
      p.push(res);
      console.log("res", p);
      return p;
    }, []);

    const results = await Promise.all(needGeocoding);

    const latlngkeyResult = results.reduce((p, c) => {
      const key = latlngkey(c.query);
      p[key] =
        c.features.length > 0
          ? c.features[0].place_name
          : "(Not found)" + fakerator.address.street();
      return p;
    }, {});

    // console.log("latlngkreyresult, ", latlngkeyResult);
    const newlocationsWithDuplicates = locations.map((l) => {
      if (l.geocoded) {
        return l;
      }
      const key = latlngkey(l.coordinates);
      const name = latlngkeyResult[key];
      return {
        ...l,
        name,
        geocoded: true,
      };
    });

    const newLocationObj = newlocationsWithDuplicates.reduce(
      (p, c) => {
        let newItem = { ...c };
        if (p.used[c.name]) {
          // already used so append (n) in the name
          newItem.name = `${newItem.name} (${p.used[c.name].length})`;
        } else if (!p.used[c.name]) {
          p.used[c.name] = [];
        }
        p.used[c.name].push(c);
        p.items.push(newItem);
        return p;
      },
      {
        used: {},
        items: [],
      }
    );
    return newLocationObj.items;
  };
  const setLocations = async (locations) => {
    console.log("setLocations", locations[locations.length - 1].name);
    let newLocations = locations;
    if (!useFakeNames) {
      newLocations = await geocodeLocations(newLocations);
    }
    newLocations[newLocations.length - 1].name =
      locations[locations.length - 1].name;
    console.log(
      "newLocations",
      JSON.stringify(newLocations[newLocations.length - 1].name)
    );
    _setLocations(newLocations);
    // so that child components can watch this value instead of the entire array of objects
    setLocationLastUpdated(new Date().getTime());
  };
  const locationsRef = useRef();
  locationsRef.current = locations;

  const [shipments, _setShipments] = useState([]);
  const [shipmentsLastUpdated, setShipmentsLastUpdated] = useState(
    new Date().getTime()
  );
  const setShipments = (shipments) => {
    _setShipments(shipments);
    // so that child components can watch this value instead of the entire array of objects
    setShipmentsLastUpdated(new Date().getTime());
  };

  const [vehicles, _setVehicles] = useState([]);
  const [vehiclesLastUpdated, setVehiclesLastUpdated] = useState(
    new Date().getTime()
  );
  const setVehicles = (vehicles) => {
    _setVehicles(vehicles);
    // so that child components can watch this value instead of the entire array of objects
    setVehiclesLastUpdated(new Date().getTime());
  };

  const [solution, setSolution] = useState(emptySolution);
  // console.log("locations", locations);
  // const [locations, setLocations] = useState(mockLocations2);
  // const [shipments, setShipments] = useState(mockShipments2);
  // const [vehicles, setVehicles] = useState(mockVehicles2);
  // const [solution, setSolution] = useState(mockSolution);
  const [mapSelectedLocation, setSelectedLocation] = useState(null);
  const [shipmentSelectedLocations, setShipmentSelectedLocations] = useState(
    []
  );
  const [
    selectedSolutionDeliveryVehicleId,
    setSelectedSolutionDeliveryVehicleId,
  ] = useState(null);
  const onClickExistingPin = (feature) => {
    console.log("feature", feature);
    // TODO remove pin if it's on locations
  };
  const onClickMap = useCallback(
    (lnglat) => {
      console.log("onClickMap called with ", lnglat, appTab, problemTab);
      if (appTab === "problem" && problemTab === "locations") {
        // add a new pin
        const location = generateLocation(lnglat.lng, lnglat.lat);
        // console.log("generate location", location);
        setLocations(locationsRef.current.concat([location]));
      }
    },
    [appTab, problemTab]
  );
  useEffect(() => {
    console.log("appTab has changed to", appTab);
  }, [appTab]);
  useEffect(() => {
    console.log("problemTab has changed to", problemTab);
  }, [problemTab]);
  const onSubmitProblem = () => {
    setIsFetchingSolution(true);
    setSolution(emptySolution);
    console.log("default locations", JSON.stringify(locations));
    console.log("default shipments", JSON.stringify(shipments));
    console.log("default vehicles", JSON.stringify(vehicles));
    const problem = generateProblemPayload(locations, shipments, vehicles);
    console.log("PROBLEM", problem);
    postRequest(`${optimizeV2Url}?access_token=${token}`, problem).then(
      (data) => {
        console.log("data", data);
        const problemLocations = [...locations];
        const problemShipments = [...shipments];
        const problemVehicles = [...vehicles];
        if (data.id) {
          getSolution(
            data.id,
            problemLocations,
            problemShipments,
            problemVehicles
          );
        }
      }
    );
  };
  const getSolution = (dataId, locations, shipments, vehicles) => {
    const solutionUrl = `${optimizeV2Url}/${dataId}?access_token=${token}`;

    var refreshId = setInterval(async function () {
      try {
        const res = await fetch(solutionUrl);
        const result = await res.json();
        console.log("resutl", result);
        if (result.status !== "processing") {
          clearInterval(refreshId);
          setIsFetchingSolution(false);
        }
        if (result.routes) {
          console.log("solution", result);
          setSolution({
            id: dataId,
            solution: result,
            vehicles,
            locations,
            shipments,
          });
          setAppTab("solution");
        } else if (result.status !== "processing") {
          alert(JSON.stringify(result, null, 2));
        }
      } catch (err) {
        clearInterval(refreshId);
        setIsFetchingSolution(false);
      }
    }, 1000);
  };

  return (
    <div>
      <div className="problem-sheet">
        <Box sx={{ bgcolor: "white", height: "100%" }}>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <TabList
              onChange={setAppTab}
              activeItem={appTab}
              items={[
                { id: "problem", label: "Problem" },
                { id: "solution", label: "Solution" },
              ]}
            />
            {isFetchingSolution ? (
              <Box sx={{ display: "flex" }}>
                <label>An awkward silence....</label>
                <CircularProgress />
              </Box>
            ) : (
              <Button size="small" onClick={onSubmitProblem}>
                Submit Problem
              </Button>
            )}
          </div>
          {appTab === "problem" && (
            <ProblemSheet
              locations={locations}
              mapBbox={bbox}
              mapSelectedLocation={mapSelectedLocation}
              onSubmitProblem={onSubmitProblem}
              problemTab={problemTab}
              setUseFakeNames={setUseFakeNames}
              setLocations={setLocations}
              setProblemTab={setProblemTab}
              setShipmentSelectedLocations={setShipmentSelectedLocations}
              setShipments={setShipments}
              setVehicles={setVehicles}
              shipments={shipments}
              shipmentsLastUpdated={shipmentsLastUpdated}
              useFakeNames={useFakeNames}
              vehicles={vehicles}
              vehiclesLastUpdated={vehiclesLastUpdated}
            />
          )}
          {appTab === "solution" && (
            <SolutionSheet
              selectedSolutionDeliveryVehicleId={
                selectedSolutionDeliveryVehicleId
              }
              setSelectedSolutionDeliveryVehicleId={
                setSelectedSolutionDeliveryVehicleId
              }
              solution={solution}
              vehiclesLastUpdated={vehiclesLastUpdated}
            />
          )}
        </Box>
      </div>
      <MapboxMap
        appTab={appTab}
        onChangeBbox={setBbox}
        onClickExistingPin={onClickExistingPin}
        onClickLocation={setSelectedLocation}
        onClickMap={onClickMap}
        locations={locations}
        locationLastUpdated={locationLastUpdated}
        setLocations={setLocations}
        setSelectedSolutionDeliveryVehicleId={
          setSelectedSolutionDeliveryVehicleId
        }
        selectedSolutionDeliveryVehicleId={selectedSolutionDeliveryVehicleId}
        shipments={shipments}
        shipmentsLastUpdated={shipmentsLastUpdated}
        shipmentSelectedLocations={shipmentSelectedLocations}
        solution={solution}
        vehicles={vehicles}
        vehiclesLastUpdated={vehiclesLastUpdated}
      />
    </div>
  );
}
