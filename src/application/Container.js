import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import areStatesEqualWrapper from "../helpers/redux/areStatesEqualWrapper";
import Application from "./index";

function mapStateToProps({ products }) {
  return {
    isFetching: products.isFetching,
    products: products.items
  };
}

function mapActionsToProps(dispatch) {
  return {
    fetchProducts() {
      dispatch(fetchProducts());
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
