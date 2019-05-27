function deepFind(object, path) {
  const paths = path.split(".");
  let current = object;

  paths.forEach(key => (current = current[key]));

  return current;
}

export default deepFind;
