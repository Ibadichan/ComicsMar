function deepClone(object) {
  if (typeof object != "object") {
    return object;
  }

  let clone = Array.isArray(object) ? [] : {};

  for (const key in object) {
    let value = object[key];
    clone[key] = typeof value == "object" ? deepClone(value) : value;
  }

  return clone;
}

export default deepClone;
