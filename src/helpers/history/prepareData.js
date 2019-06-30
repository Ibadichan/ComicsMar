function prepareData(store, state) {
  const { query, params, routes } = state;

  const prepareDataFunctions = routes
    .map(route => route.prepareData)
    .filter(func => func != undefined);

  return Promise.all(
    prepareDataFunctions.map(func => func(store, query, params, routes))
  );
}

export default prepareData;
