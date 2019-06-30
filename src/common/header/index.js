import React, { createRef } from "react";
import PropTypes from "prop-types";
import Button from "common/Button";
import Navigation from "./components/Navigation";

function Header({ purchases }) {
  const header = createRef();

  function handleNavigationToggle() {
    header.current.classList.toggle("opened");
  }

  return (
    <header className="main-header" ref={header}>
      <Navigation purchases={purchases} />
      <Button
        className="toggle-main-navigation-content"
        onClick={handleNavigationToggle}
        hideText
      >
        Toggle Navigation
      </Button>
    </header>
  );
}

Header.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default Header;
