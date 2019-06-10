import { reducer as formReducer } from "redux-form";
import products from "./products";
import purchases from "./purchases";
import slideshow from "./slideshow";

const reducers = {
  form: formReducer,
  products,
  purchases,
  slideshow
};

export default reducers;
