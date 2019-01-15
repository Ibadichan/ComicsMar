import React from 'react';
import Main from '../../common/components/Main';

function NotFoundPage({ location, history }) {
  return (
    <Main headerText='Oops! Nothing to see here'>
      <p>{`You found a broken link '${location.pathname}'`}</p>
      <a href='#' onClick={history.goBack}>Back</a>
    </Main>
  );
}

export default NotFoundPage;
