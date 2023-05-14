import React, { useEffect, useMemo, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { mapboxToken } from "../Constant";
import getColor from "number-to-color";
import { flatten } from "./../util/flatten";
import { rgbToHex } from "../util/rgbToHex";
import polyline from "@mapbox/polyline";
import { featureTodeliveryLocationPopup } from "../util/featureTodeliveryLocationPopup";
import { stringToDate } from "../util/stringToDate";
import { featureToShowShipmentPopup } from "../util/featureToshowShipmentPopup";
import { rgba } from "polished";

const initCenter = [80.06172264297051, 7.463090917201895];
const initZoom = 12;
const pinLayer = "pins";
const shipmentSrc = "shipment";
const shipmentLineLayer = "shipment-line";
const shipmentLineArrowLayer = "shipment-line-arrow";
const deliveryRouteSrc = "delivery-route-source";
const deliveryRouteLayer = "delivery-route-layer";
const deliveryRouteArrowLayer = "delivery-route-arrow-layer";
const deliveryWalkRouteSrc = "delivery-walk-route-source";
const deliveryWalkRouteLayer = "delivery-walk-route-layer";
const deliveryLocationSrc = "delivery-location-source";
const deliveryLocationLayer = "delivery-location-layer";
const clickErr = 5; // QRF tap error in pixels
const defaultLineOpacity = 0.5;

const problemLayers = [pinLayer, shipmentLineLayer, shipmentLineArrowLayer];
const solutionLayers = [
  deliveryRouteLayer,
  deliveryWalkRouteLayer,
  deliveryLocationLayer,
];

export const MapboxMap = ({
  appTab,
  locationLastUpdated,
  locations,
  onChangeBbox,
  onClickMap,
  onClickExistingPin,
  setSelectedSolutionDeliveryVehicleId,
  selectedSolutionDeliveryVehicleId,
  shipments,
  shipmentsLastUpdated,
  solution,
  vehicles,
  vehiclesLastUpdated,
}) => {
  // map states
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const locationNameHash = useMemo(() => {
    return locations.reduce((p, l) => {
      if (p[l.name]) {
        throw new Error(`Duplicate name exists ${l.name}`);
      }
      p[l.name] = l;
      return p;
    }, {});
  }, [locationLastUpdated]);

  const shipmentNameHash = useMemo(() => {
    return shipments.reduce((p, c) => {
      p[c.name] = c;
      return p;
    }, {});
  }, [shipmentsLastUpdated]);

  const vehicleNameHash = useMemo(() => {
    return vehicles.reduce((p, c) => {
      p[c.name] = c;
      return p;
    }, {});
  }, [vehiclesLastUpdated]);

  React.useEffect(function () {
    if (mapRef.current) return;
    mapboxgl.accessToken = mapboxToken;
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/takutosuzukimapbox/cl25i22js008j14mti41y0hwu",
      center: initCenter,
      zoom: initZoom,
    });

    const map = mapRef.current;
    // Add the control to the map.
    // map.addControl(
    //   // globally defined via CDN
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl
    //   })
    // );
    map.on("load", () => {
      const bbox = getBbox(map);
      onChangeBbox(bbox);

      // Add a layer showing shipments.
      map.addSource(shipmentSrc, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: shipmentLineLayer,
        type: "line",
        source: shipmentSrc,
        paint: {
          "line-width": 6,
          "line-opacity": defaultLineOpacity,
          "line-color": [
            "match",
            ["get", "groupId"],
            0,
            "hsl(0, 80%, 73%)",
            1,
            "hsl(233, 89%, 50%)",
            "#000000",
          ],
        },
      });
      map.addLayer({
        id: shipmentLineArrowLayer,
        type: "symbol",
        source: shipmentSrc,
        layout: {
          "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"],
          "symbol-placement": "line",
        },
      });

      map.addSource(deliveryRouteSrc, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: deliveryRouteLayer,
        type: "line",
        source: deliveryRouteSrc,
        paint: {
          "line-width": 4,
          "line-offset": 2,
          "line-opacity": defaultLineOpacity,
        },
      });
      map.addLayer({
        id: deliveryRouteArrowLayer,
        type: "symbol",
        source: deliveryRouteSrc,
        layout: {
          "icon-image": ["step", ["zoom"], "oneway-small", 18, "oneway-large"],
          "symbol-placement": "line",
        },
      });

      map.addSource(deliveryWalkRouteSrc, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: deliveryWalkRouteLayer,
        type: "line",
        source: deliveryWalkRouteSrc,
        paint: {
          "line-width": 2,
          "line-color": "gray",
          "line-dasharray": [2, 1],
        },
      });

      // Add a layer showing the places. Intentionally above all other layers
      map.addSource(pinLayer, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: pinLayer,
        type: "symbol",
        source: pinLayer,
        paint: {
          "text-halo-blur": 1,
          "text-halo-width": 1,
        },
        layout: {
          "text-field": ["get", "name"],
          "text-allow-overlap": true,
          "icon-allow-overlap": true,
          "text-size": 11,
          "text-offset": [0, 1.5],
          "icon-image": "mapbox-marker-icon-blue",
        },
      });

      // Add a layer showing the places. Intentionally above all other layers
      map.addSource(deliveryLocationSrc, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: deliveryLocationLayer,
        type: "symbol",
        source: deliveryLocationSrc,
        layout: {
          "text-field": [
            "case",
            [">", ["get", "volumePickupTotal"], 0],
            ["concat", ["literal", "+"], ["get", "stopNumber"]],
            [">", ["get", "volumeDropoffTotal"], 0],
            ["concat", ["literal", "-"], ["get", "stopNumber"]],
            ["get", "stopNumber"],
          ],
          "text-allow-overlap": true,
          "icon-allow-overlap": true,
          "text-size": 14,
          "icon-image": "circle-white-2",
          "icon-size": 1.5,
          "symbol-sort-key": ["*", ["get", "stopNumber"], -1],
        },
      });

      updatePins();
      updateShipmentLineLayer();
      updateDeliveryPaths();
      updateDeliveryPins();
      updateWalkablePaths();

      onAppTabUpdate();
    });

    map.on("zoomend", () => {
      const bbox = getBbox(map);
      onChangeBbox(bbox);
    });

    map.on("dragend", () => {
      const bbox = getBbox(map);
      onChangeBbox(bbox);
    });
    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on("click", (e) => {
      popup.remove();

      if (showDeliveryPinPopup(e)) {
        return;
      }

      if (showShipmentPopup(e)) {
        return;
      }

      if (filterByDeliveryRoute(e)) {
        return;
      }

      if (onClickLocation(e)) {
        return;
      }

      onClickMap(e.lngLat);
    });

    const onClickLocation = (e) => {
      console.log("onClickLocation");
      const point = e.point;
      const features = map.queryRenderedFeatures(
        [
          [point.x - clickErr / 2, point.y - clickErr / 2],
          [point.x + clickErr / 2, point.y + clickErr / 2],
        ],
        {
          layers: [pinLayer],
        }
      );
      if (features.length < 1) {
        return false;
      }
      console.log("Foudn click location");
      onClickExistingPin(features[0]);
      return true;
    };
    const filterByDeliveryRoute = (e) => {
      console.log("fitlerby deliveryroute click");
      const point = e.point;
      const features = map.queryRenderedFeatures(
        [
          [point.x - clickErr / 2, point.y - clickErr / 2],
          [point.x + clickErr / 2, point.y + clickErr / 2],
        ],
        {
          layers: [deliveryRouteLayer],
        }
      );
      if (features.length < 1) {
        return false;
      }
      const feature = features[0];
      if (feature.properties.vehicleId === selectedSolutionDeliveryVehicleId) {
        return;
      }
      setSelectedSolutionDeliveryVehicleId(feature.properties.vehicleId);
      return true;
    };
    const showDeliveryPinPopup = (e) => {
      // Find all features within a bounding box around a point
      const point = e.point;
      const features = map.queryRenderedFeatures(
        [
          [point.x - clickErr / 2, point.y - clickErr / 2],
          [point.x + clickErr / 2, point.y + clickErr / 2],
        ],
        {
          layers: [deliveryLocationLayer],
        }
      );
      if (features.length < 1) {
        return false;
      }

      const featuresDesc = features.map((feature, idx) =>
        featureTodeliveryLocationPopup(feature)
      );

      popup
        .setLngLat(e.lngLat)
        .setHTML(featuresDesc.join("<br/><br/>"))
        .addTo(map);
      return true;
    };

    const showShipmentPopup = (e) => {
      // Find all features within a bounding box around a point
      const point = e.point;
      const features = map.queryRenderedFeatures(
        [
          [point.x - clickErr / 2, point.y - clickErr / 2],
          [point.x + clickErr / 2, point.y + clickErr / 2],
        ],
        {
          layers: [shipmentLineLayer],
        }
      );
      if (features.length < 1) {
        return false;
      }
      const feature = features[0];
      const description = featureToShowShipmentPopup(feature);
      popup.setLngLat(e.lngLat).setHTML(description).addTo(map);
      return true;
    };
  }, []);

  const updatePins = () => {
    console.log("updat pins");
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    if (!map._loaded) {
      return;
    }

    const locationFeatures = locations.map((l) => ({
      type: "Feature",
      properties: {
        name: l.name,
      },
      geometry: {
        type: "Point",
        coordinates: l.coordinates,
      },
    }));

    console.log("updat pins locationFeatures", locationFeatures);
    map.getSource(pinLayer).setData({
      type: "FeatureCollection",
      features: locationFeatures,
    });
  };

  // on locations update
  useEffect(() => {
    updatePins();
  }, [locationLastUpdated]);

  const updateShipmentLineLayer = () => {
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    if (!map._loaded) {
      return;
    }
    const groupIds = shipments.reduce(
      (p, c) => {
        if (p.used[c.groupId]) {
          return p;
        }
        p.used[c.groupId] = p.idx;
        return {
          used: p.used,
          idx: p.idx + 1,
        };
      },
      { idx: 0, used: {} }
    );

    const shipmentLines = shipments.map((s) => {
      const fromLocation = locationNameHash[s.from];
      if (!fromLocation) {
        throw new Error(`Unknown location ${s.from}`);
      }
      const toLocation = locationNameHash[s.to];
      if (!toLocation) {
        throw new Error(`Unknown location ${s.to}`);
      }
      const fromCoords = fromLocation.coordinates;
      const toCoords = toLocation.coordinates;
      return {
        type: "Feature",
        properties: {
          name: s.name,
          from: s.from,
          to: s.to,
          size: s.size ? s.size.volume : null,
          requirements: !s.requirements ? "" : s.requirements.join(", "),
          dropoffTimeEarliest: !s.dropoff_times
            ? null
            : s.dropoff_times[0].earliest || "",
          dropoffTimeLatest: !s.dropoff_times
            ? null
            : s.dropoff_times[0].latest || "",
          pickupTimeEarliest: !s.pickup_times
            ? null
            : s.pickup_times[0].earliest || "",
          pickupTimeLatest: !s.pickup_times
            ? null
            : s.pickup_times[0].latest || "",
          groupIdx: groupIds.used[s.groupId],
        },
        geometry: {
          type: "LineString",
          coordinates: [fromCoords, toCoords],
        },
      };
    });

    const groupIdsSorted = Object.values(groupIds.used).sort();
    const maxGroups = groupIdsSorted.length;
    const colors = flatten(
      groupIdsSorted.map((v, idx) => {
        // const rgb = getColor(idx, maxGroups);
        const hex = rgba({
          red: Math.floor((idx / maxGroups) * 255),
          green: Math.floor((1 - idx / maxGroups) * 255),
          blue: 100,
          alpha: 1,
        });
        return [v, hex];
      })
    );

    const lineColor =
      colors.length < 1
        ? "#000000"
        : ["match", ["get", "groupIdx"], ...colors, "#000000"];
    map.setPaintProperty(shipmentLineLayer, "line-color", lineColor);
    map.getSource(shipmentSrc).setData({
      type: "FeatureCollection",
      features: shipmentLines,
    });
  };
  // on shipments update
  useEffect(() => {
    updateShipmentLineLayer();
  }, [shipmentsLastUpdated]); // doesn't work if shipment objects are mutated. reconsider an appropriate hash

  // updateWalkablePaths builds paths that users can walk from the snapped point to the requested location
  const updateWalkablePaths = () => {
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    // map.loaded() doesn't seem to return correct values
    if (!map._loaded) {
      return;
    }

    const nestedFeatureCollections = solution.solution.routes.map((r) => {
      return r.stops.map((s) => {
        return {
          type: "Feature",
          properties: {
            vehicleId: r.vehicle,
          },
          geometry: {
            type: "LineString",
            coordinates: [
              s.location_metadata.snapped_coordinate,
              s.location_metadata.supplied_coordinate,
            ],
          },
        };
      });
    }, []);

    const featureCollections = flatten(nestedFeatureCollections);
    map.getSource(deliveryWalkRouteSrc).setData({
      type: "FeatureCollection",
      features: featureCollections,
    });
  };

  const dropoffPickupDeliveryPinMap = (p, c) => {
    if (!shipmentNameHash[c]) {
      throw new Error(`Shipment not found for ${c}`);
    }
    const shipment = shipmentNameHash[c];

    return {
      count: p.count + 1,
      dropoffsla: !shipment.dropoff_times
        ? p.dropoffsla
        : p.dropoffsla.concat([...shipment.dropoff_times]),
      pickupsla: !shipment.pickup_times
        ? p.pickupsla
        : p.pickupsla.concat([...shipment.pickup_times]),
      total: p.total + shipment.size.volume,
    };
  };

  const updateDeliveryPins = async () => {
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    // map.loaded() doesn't seem to return correct values
    if (!map._loaded) {
      return;
    }
    const nestedDeliveryFeatures = solution.solution.routes.map(
      (r, vehicleIdx) => {
        let stopsTotalVolume = 0;
        const vehicle = vehicleNameHash[r.vehicle];
        if (!vehicle) {
          throw new Error(`vehicle ${r.vehicle} not found`);
        }
        return r.stops.map((s, idx) => {
          let dropoffs = {
            count: 0,
            dropoffsla: [],
            pickupsla: [],
            total: 0,
          };
          let pickups = {
            count: 0,
            dropoffsla: [],
            pickupsla: [],
            total: 0,
          };

          if (s.pickups) {
            pickups = s.pickups.reduce(dropoffPickupDeliveryPinMap, pickups);
          }

          if (s.dropoffs) {
            dropoffs = s.dropoffs.reduce(dropoffPickupDeliveryPinMap, dropoffs);
          }
          const location = locationNameHash[s.location];
          const volumeBeforeArriving = stopsTotalVolume;
          const volumePickupUnique = pickups.count;
          const volumePickupTotal = pickups.total;
          const volumeDropoffTotal = dropoffs.total;
          const volumeDropoffUnique = dropoffs.count;
          const volumeAfterDeparting =
            stopsTotalVolume + volumePickupTotal - volumeDropoffTotal;

          stopsTotalVolume = volumeAfterDeparting;

          let eta = "";
          let etd = "";
          if (s.eta) {
            const etaDate = stringToDate(s.eta);
            var v = stringToDate(s.eta);
            v.setSeconds(
              etaDate.getSeconds() + (s.wait || 0) + (s.duration || 0)
            );
            eta = etaDate.toISOString();
            etd = v.toISOString();
          }
          const dropoffSlaMap = dropoffs.dropoffsla.reduce((p, c, idx) => {
            const key = `dropoff-sla-${idx}`;
            const earliest = `${key}-earliest`;
            const latest = `${key}-latest`;
            p[earliest] = c.earliest;
            p[latest] = c.latest;
            return p;
          }, {});
          const pickupSlaMap = pickups.pickupsla.reduce((p, c, idx) => {
            const key = `pickup-sla-${idx}`;
            const earliest = `${key}-earliest`;
            const latest = `${key}-latest`;
            p[earliest] = c.earliest;
            p[latest] = c.latest;
            return p;
          }, {});

          return {
            type: "Feature",
            properties: {
              dropoffSlaCount: dropoffs.dropoffsla.length,
              ...dropoffSlaMap,
              eta: eta,
              etd: etd,
              duration: s.duration,
              location: s.location,
              odometer: s.odometer,
              pickupSlaCount: pickups.pickupsla.length,
              ...pickupSlaMap,
              stopNumber: idx + 1,
              type: s.type,
              vehicleId: vehicle.name,
              vehicleCapacity: vehicle.capacities
                ? vehicle.capacities.volume
                : "Not Set",
              vehicleNumber: vehicleIdx + 1,
              volumeBeforeArriving,
              volumeAfterDeparting,
              volumePickupTotal,
              volumePickupUnique,
              volumeDropoffTotal,
              volumeDropoffUnique,
              wait: s.wait,
            },
            geometry: {
              type: "Point",
              coordinates: location.coordinates,
            },
          };
        });
      }
    );
    const featureCollections = flatten(nestedDeliveryFeatures);
    map.getSource(deliveryLocationSrc).setData({
      type: "FeatureCollection",
      features: featureCollections,
    });
  };

  const updateDeliveryPaths = async () => {
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    // map.loaded() doesn't seem to return correct values
    if (!map._loaded) {
      return;
    }
    const allCoords = solution.solution.routes.map((r) => {
      const coords = r.stops.map((s) => {
        return s.location_metadata.snapped_coordinate.join(",");
      });
      let chunks = [];
      let chunk = [];
      coords.forEach((coord, idx, arr) => {
        chunk.push(coord);
        if (chunk.length === 25 || arr.length - 1 === idx) {
          chunks.push(chunk);
          chunk = [];
        }
        // get the last one from the last chunks to connect the two points
        if (chunk.length === 0 && chunks.length > 0) {
          const lastChunk = chunks[chunks.length - 1];
          chunk.push(lastChunk[lastChunk.length - 1]);
        }
      });
      return {
        coords: chunks,
        vehicleId: r.vehicle,
      };
    }, []);
    const flatCoordsObj = allCoords.reduce((p, c) => {
      c.coords.forEach((coord) => {
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coord.join(
          ";"
        )}?overview=full&geometries=polyline6&access_token=${mapboxToken}`;
        p.push({
          vehicleId: c.vehicleId,
          url,
        });
      });

      return p;
    }, []);
    const responses = await Promise.all(
      flatCoordsObj.map((v) => fetchRoute(v.url))
    );
    const featureCollections = responses.reduce((p, resp, idx) => {
      if (resp.routes.length < 1) {
        return p;
      }
      const geom = resp.routes[0].geometry;
      const latlngs = polyline.decode(geom, 6);

      const obj = {
        type: "Feature",
        properties: {
          vehicleId: flatCoordsObj[idx].vehicleId,
        },
        geometry: {
          type: "LineString",
          coordinates: latlngs.map((latlng) => [latlng[1], latlng[0]]),
        },
      };
      p.push(obj);
      return p;
    }, []);

    const colors = flatten(
      solution.solution.routes.map((v, idx) => {
        const rgb = rgba({
          red: Math.floor((idx / solution.solution.routes.length) * 255),
          green: Math.floor((1 - idx / solution.solution.routes.length) * 255),
          blue: 100,
          alpha: 1,
        });

        return [v.vehicle, rgb];
      })
    );
    const lineColor =
      colors.length < 1
        ? "#000000"
        : ["match", ["get", "vehicleId"], ...colors, "#000000"];
    map.setPaintProperty(deliveryRouteLayer, "line-color", lineColor);
    map.getSource(deliveryRouteSrc).setData({
      type: "FeatureCollection",
      features: featureCollections,
    });
  };

  const fetchRoute = (url) => {
    return fetch(url).then((res) => res.json());
  };

  useEffect(() => {
    updateDeliveryPaths();
    updateDeliveryPins();
    updateWalkablePaths();
  }, [!solution ? null : solution.id]);

  const onAppTabUpdate = () => {
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    // map.loaded() doesn't seem to return correct values
    if (!map._loaded) {
      return;
    }
    if (appTab === "problem") {
      problemLayers.forEach((l) =>
        map.setLayoutProperty(l, "visibility", "visible")
      );

      solutionLayers.forEach((l) =>
        map.setLayoutProperty(l, "visibility", "none")
      );
    } else if (appTab === "solution") {
      problemLayers.forEach((l) =>
        map.setLayoutProperty(l, "visibility", "none")
      );

      solutionLayers.forEach((l) =>
        map.setLayoutProperty(l, "visibility", "visible")
      );
    }
  };
  useEffect(() => {
    onAppTabUpdate();
  }, [appTab]);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    const map = mapRef.current;
    // map.loaded() doesn't seem to return correct values
    if (!map._loaded) {
      return;
    }
    console.log(
      "updating selectedSolutionDeliveryVehicleId",
      selectedSolutionDeliveryVehicleId
    );
    if (!selectedSolutionDeliveryVehicleId) {
      // reset selection
      map.setPaintProperty(
        deliveryRouteLayer,
        "line-opacity",
        defaultLineOpacity
      );

      map.setFilter(deliveryLocationLayer, true);
      map.setFilter(deliveryRouteArrowLayer, true);
      map.setLayoutProperty(deliveryLocationLayer, "symbol-sort-key", [
        "*",
        ["get", "stopNumber"],
        -1,
      ]);
      return;
    }
    map.setFilter(deliveryLocationLayer, [
      "==",
      ["get", "vehicleId"],
      selectedSolutionDeliveryVehicleId,
    ]);
    map.setPaintProperty(deliveryRouteLayer, "line-opacity", [
      "match",
      ["get", "vehicleId"],
      [selectedSolutionDeliveryVehicleId],
      1.0,
      0.1,
    ]);
    map.setFilter(deliveryRouteArrowLayer, [
      "==",
      ["get", "vehicleId"],
      selectedSolutionDeliveryVehicleId,
    ]);
    map.setLayoutProperty(deliveryLocationLayer, "symbol-sort-key", [
      "match",
      ["get", "vehicleId"],
      [selectedSolutionDeliveryVehicleId],
      0,
      1,
    ]);
  }, [selectedSolutionDeliveryVehicleId]);

  return <div ref={mapContainer} id="map1"></div>;
};

const getBbox = (map) => {
  const glBbox = map.getBounds();
  return [
    glBbox.getSouthWest().lng,
    glBbox.getSouthWest().lat,
    glBbox.getNorthEast().lng,
    glBbox.getNorthEast().lat,
  ];
};
