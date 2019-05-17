import React from "react";
import PropTypes from "prop-types";
import Image from "~/src/common/images/Image";

function Slide({ slide }) {
  const { title, photo } = slide;

  return (
    <li className="slideshow-item">
      <h3>{title}</h3>
      <Image {...photo} />
    </li>
  );
}

Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Slide;
