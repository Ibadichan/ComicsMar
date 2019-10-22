import { connect } from "react-redux";
import areStatesEqualWrapper from "helpers/redux/areStatesEqualWrapper";
import CartPage from "./index";

function mapStateToProps(state) {
  const purchases = state.purchases;
  const pageTitle =
    purchases.length > 0
      ? "Products added to cart:"
      : "Your cart is empty, add something.";

  return {
    purchases,
    pageTitle
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
