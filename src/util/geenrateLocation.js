import { v4 as uuidv4 } from "uuid";
import Fakerator from "fakerator";

var fakerator = Fakerator("en-US");

export const generateLocation = (lng, lat, name) => {
  return {
    id: uuidv4(),
    name: name,
    coordinates: [lng, lat],
    type: "location",
  };
};
