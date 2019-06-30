import { connect } from "react-redux";
import areStatesEqualWrapper from "helpers/redux/areStatesEqualWrapper";
import CartPage from "./index";

function mapStateToProps(state) {
  return {
    purchases: state.purchases
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    areStatesEqual: areStatesEqualWrapper("purchases")
  }
)(CartPage);
