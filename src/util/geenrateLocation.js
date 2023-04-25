import { v4 as uuidv4 } from "uuid";
import Fakerator from "fakerator";

var fakerator = Fakerator("en-US");

export const generateLocation = (lng, lat) => {
  return {
    id: uuidv4(),
    name: fakerator.address.street(),
    coordinates: [lng, lat],
    type: "location"
  };
};
