import { connect } from "react-redux";
import ProductPage from "./index";

function mapStateToProps(state) {
  return {
    products: state.products.items
  };
}

export default connect(mapStateToProps)(ProductPage);
