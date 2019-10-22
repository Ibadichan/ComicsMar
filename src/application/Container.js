import { connect } from "react-redux";
import { initializeCart } from "actions/purchases";
import areStatesEqualWrapper from "helpers/redux/areStatesEqualWrapper";
import loadPurchases from "helpers/purchases/loadPurchases";
import Application from "./index";

function mapStateToProps({ products }) {
  return {
    isFetching: products.isFetching,
    products: products.items
  };
}

function mapActionsToProps(dispatch) {
  return {
    initializeCart() {
      dispatch(initializeCart(loadPurchases()));
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
  null,
  {
    areStatesEqual: areStatesEqualWrapper(
      "products.items",
      "products.isFetching"
    )
  }
)(Application);
