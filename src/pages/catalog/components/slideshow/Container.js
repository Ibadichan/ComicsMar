import { connect } from "react-redux";
import areStatesEqualWrapper from "helpers/redux/areStatesEqualWrapper";
import Slideshow from "./index";

function mapStateToProps(state) {
  return {
    slides: state.slideshow.items
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    areStatesEqual: areStatesEqualWrapper("slideshow.items")
  }
)(Slideshow);
