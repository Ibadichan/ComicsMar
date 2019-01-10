import React from 'react';
import PropTypes from 'prop-types';

function Main({ headerText, children }) {
  return (
    <main>
      <h1 className='page-title'>{headerText}</h1>
      {children}
    </main>
  );
}

Main.propTypes = {
  headerText: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Main;
