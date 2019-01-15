import React from 'react';
import PropTypes from 'prop-types';

function NoticeMessage({ text }) {
  return (
    <p className='notice-message'>{text}</p>
  );
}

NoticeMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default NoticeMessage;
