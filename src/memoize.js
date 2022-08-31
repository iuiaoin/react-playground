const shallowEqual = (a, b) => {
  if (!a) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i += 1) {
    if (!Object.is(a[i], b[i])) {
      return false;
    }
  }
  return true;
};

export function memoize(f) {
  let prev;
  let value;
  return (...args) => {
    if (shallowEqual(prev, args)) {
      return value;
    }
    prev = args;
    value = f.apply(undefined, args);
    return value;
  };
}
