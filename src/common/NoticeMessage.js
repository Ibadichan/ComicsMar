import React from "react";
import PropTypes from "prop-types";

function NoticeMessage({ text, className }) {
  return <p className={className}>{text}</p>;
}

NoticeMessage.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default NoticeMessage;
