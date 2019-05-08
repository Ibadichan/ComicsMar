import { connect } from "react-redux";
import Header from "./index";

function mapStateToProps(state) {
  return {
    purchases: state.purchases
  };
}

export default connect(mapStateToProps)(Header);
