import React from "react";
import PropTypes from "prop-types";
import logo from "~/img/logo.svg";
import NavLink from "~/src/common/linkWrappers/NavLink";
import { rootPath, contactPath, cartPath } from "~/src/helpers/routes";

function Navigation({ purchases }) {
  return (
    <nav className="main-navigation">
      <NavLink to={rootPath()} className="main-header-logo">
        <img src={logo} width="300" height="113" alt="ComicsMar logo" />
      </NavLink>
      <div className="main-navigation-content">
        <ul className="site-navigation">
          <li>
            <NavLink to={contactPath()} activeClassName="active">
              Contacts
            </NavLink>
          </li>
          <li>
            <a href="javascript:void(0);">About</a>
          </li>
          <li>
            <a href="javascript:void(0);">Team</a>
          </li>
        </ul>
        <ul className="user-navigation">
          <li>
            <NavLink to={cartPath()} activeClassName="active">
              <span className="cart-link-counter" data-badge={purchases.length}>
                My cart
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default Navigation;
