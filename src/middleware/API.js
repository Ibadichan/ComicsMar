import APICall from "~/src/utils/APICall";
import settings from "~/src/config/settings";
const API_CALL = settings.API_CALL;

const API = ({ dispatch }) => next => action => {
  if (!action[API_CALL]) {
    return next(action);
  }

  const {
    [API_CALL]: {
      method,
      endpoint,
      query,
      payload,
      headers,
      types: [requestType, successType, failureType]
    }
  } = action;

  dispatch(nextAction(action, { type: requestType }));

  const request = APICall({ method, endpoint, query, payload, headers })
    .then(response => {
      dispatch(
        nextAction(action, { type: successType, response: response.body })
      );
    })
    .catch(error => {
      dispatch(nextAction(action, { type: failureType, error }));
    });

  return request;
};

function nextAction(action, data) {
  return Object.assign({}, action, data, { [API_CALL]: undefined });
}

export default API;
