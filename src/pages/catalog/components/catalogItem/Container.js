import { connect } from "react-redux";
import { addProductToCart } from "actions/purchases";
import CatalogItem from "./index";

function mapActionsToProps(dispatch) {
  return {
    addProductToCart(product, quantity) {
      dispatch(addProductToCart(product, quantity));
    }
  };
}

export default connect(
  null,
  mapActionsToProps
)(CatalogItem);
