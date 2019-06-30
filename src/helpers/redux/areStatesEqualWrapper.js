import deepFind from "utils/deepFind";

function areStatesEqualWrapper(...keys) {
  return function(next, prev) {
    for (let i = 0; i < keys.length; i++) {
      if (deepFind(next, keys[i]) !== deepFind(prev, keys[i])) {
        return false;
      }
    }

    return true;
  };
}

export default areStatesEqualWrapper;
