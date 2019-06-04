import API from "./API";
import saveCart from "./saveCart";

const middleware = [API, saveCart];

export default middleware;
