import humps from "humps";

function dataAttributes(data) {
  if (typeof data != "object") {
    return {};
  }

  const kebabCasedData = humps.decamelizeKeys(data, { separator: "-" });
  const dataWithPrefix = Object.keys(kebabCasedData).reduce((result, key) => {
    result[`data-${key}`] = `${kebabCasedData[key]}`;
    return result;
  }, {});

  return dataWithPrefix;
}

export default dataAttributes;
