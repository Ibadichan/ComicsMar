import { connect } from "react-redux";
import areStatesEqualWrapper from "helpers/redux/areStatesEqualWrapper";
import Application from "./index";

function mapStateToProps({ products }) {
  return {
    isFetching: products.isFetching,
    products: products.items
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    areStatesEqual: areStatesEqualWrapper(
      "products.items",
      "products.isFetching"
    )
  }
)(Application);
