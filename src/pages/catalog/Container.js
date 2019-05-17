import { connect } from "react-redux";
import CatalogPage from "./index";

function mapStateToProps(state) {
  return {
    products: state.products.items
  };
}

export default connect(mapStateToProps)(CatalogPage);
