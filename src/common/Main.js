import React from 'react';
import PropTypes from 'prop-types';

function Main({ headerText, children, className }) {
  return (
    <main className={className}>
      <h1>{headerText}</h1>
      {children}
    </main>
  );
}

Main.propTypes = {
  headerText: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Main;
