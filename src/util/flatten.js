export const flatten = (a) => {
  return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : a;
};
