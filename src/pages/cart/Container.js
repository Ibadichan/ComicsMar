import { connect } from "react-redux";
import CartPage from "./index";

function mapStateToProps(state) {
  return {
    purchases: state.purchases
  };
}

export default connect(mapStateToProps)(CartPage);
