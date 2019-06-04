import { connect } from "react-redux";
import { fetchSlideshowPhotos } from "~/src/actions/slideshow";
import areStatesEqualWrapper from "~/src/helpers/redux/areStatesEqualWrapper";
import Slideshow from "./index";

function mapStateToProps(state) {
  return {
    slides: state.slideshow.items
  };
}

function mapActionsToProps(dispatch) {
  return {
    fetchSlideshowPhotos() {
      dispatch(fetchSlideshowPhotos());
    }
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
  null,
  {
    areStatesEqual: areStatesEqualWrapper("slideshow.items")
  }
)(Slideshow);
