import { connect } from "react-redux";
import areStatesEqualWrapper from "~/src/helpers/redux/areStatesEqualWrapper";
import ProductPage from "./index";

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;

  return {
    product: state.products.items.filter(product => product.id == id)[0]
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
  { areStatesEqual: areStatesEqualWrapper("products.items") }
)(ProductPage);
