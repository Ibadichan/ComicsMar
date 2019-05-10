import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

function WrappedImage({ image, wrapper }) {
  return (
    <wrapper.node {...wrapper.attributes}>
      <Image {...image} />
    </wrapper.node>
  );
}

WrappedImage.propTypes = {
  image: PropTypes.shape(Image.propTypes).isRequired,
  wrapper: PropTypes.shape({
    node: PropTypes.string.isRequired,
    attributes: PropTypes.objectOf(PropTypes.string)
  }).isRequired
};

export default WrappedImage;
