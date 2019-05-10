import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  return <img {...props} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  className: PropTypes.string
};

export default Image;
