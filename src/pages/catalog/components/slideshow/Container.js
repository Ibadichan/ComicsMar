import { connect } from "react-redux";
import { fetchSlideshowPhotos } from "~/src/actions/slideshow";
import Slideshow from "./index";

function mapStateToProps(state) {
  return {
    slides: state.slideshow.photos
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
  mapActionsToProps
)(Slideshow);
