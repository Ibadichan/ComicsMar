import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Main from "common/Main";
import Button from "common/Button";

function NotFoundPage({ location, history }) {
  return (
    <Main className="not-found-page" headerText="Page not found">
      <Helmet>
        <title>Not found</title>
      </Helmet>

      <p>
        You found a broken link
        <b className="broken-link">'{location.pathname}'</b>
      </p>
      <Button className="button" onClick={history.goBack}>
        Go Back
      </Button>
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
