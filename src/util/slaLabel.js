// shipment pickup/dropoff object to pickup label
export const slaTimesToLabel = (s) => {
  if (!s) {
    return "";
  }
  return `${s[0].earliest.substring(11, 16)} - ${s[0].latest.substring(
    11,
    16
  )}`;
};
