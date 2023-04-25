import humanizeDuration from "humanize-duration";
// compares two dates and returns in minutes
export const compareDates = (d1, d2) => {
  return humanizeDuration(d1 - d2); // seconds
};
