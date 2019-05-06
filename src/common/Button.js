import React from 'react';
import PropTypes from 'prop-types';
import dataAttributes from '~/src/utils/dataAttributes';

function Button(props) {
  const {
    type,
    className,
    onClick,
    children,
    hideText,
    data
  } = props;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      {...dataAttributes(data)}
    >
      {
        hideText ?
          <span className='visually-hidden'>{children}</span> :
          children
      }
    </button>
  );
}

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  ),
  children: PropTypes.string.isRequired,
  hideText: PropTypes.bool
};

export default Button;
