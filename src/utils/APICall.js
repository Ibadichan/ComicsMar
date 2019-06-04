import superagent from "superagent";
import humps from "humps";

function APICall({ method, endpoint, query, payload, headers }) {
  let request = superagent[method.toLowerCase()](endpoint);

  if (query) {
    request = request.query(humps.decamelizeKeys(query));
  }

  if (payload) {
    request = request.send(humps.decamelizeKeys(payload));
  }

  if (headers) {
    for (const key in headers) {
      request = request.set(key, headers[key]);
    }
  }

  return request;
}

export default APICall;
