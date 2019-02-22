import React from 'react';
import PropTypes from 'prop-types';
import Main from '~/src/common/Main';

function NotFoundPage({ location, history }) {
  return (
    <Main headerText='Oops! Nothing to see here'>
      <p>{`You found a broken link '${location.pathname}'`}</p>
      <a href='#' onClick={history.goBack}>Back</a>
    </Main>
  );
}

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default NotFoundPage;
