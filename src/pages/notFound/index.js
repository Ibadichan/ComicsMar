import React from 'react';
import PropTypes from 'prop-types';
import Main from '~/src/common/Main';
import Button from '~/src/common/Button';

function NotFoundPage({ location, history }) {
  return (
    <Main headerText='Oops! Nothing to see here'>
      <p>{`You found a broken link '${location.pathname}'`}</p>
      <Button onClick={history.goBack}>Back</Button>
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
