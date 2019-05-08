import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./header/Container";
import Main from "./Main";
import Footer from "./Footer";

function PageLayout({ title, children }) {
  return (
    <Fragment>
      <Header />
      <Main headerText={title}>{children}</Main>
      <Footer />
    </Fragment>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PageLayout;
