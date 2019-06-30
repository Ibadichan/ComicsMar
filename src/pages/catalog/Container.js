import { connect } from "react-redux";
import areStatesEqualWrapper from "helpers/redux/areStatesEqualWrapper";
import CatalogPage from "./index";

function mapStateToProps(state) {
  return {
    products: state.products.items
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    areStatesEqual: areStatesEqualWrapper("products.items")
  }
)(CatalogPage);
