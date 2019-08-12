import React from "react";
import PropTypes from "prop-types";
import Button from "common/Button";

function OrderFormToggler({ className, toggle }) {
  return (
    <p className={className}>
      <span onClick={toggle}>Order this product</span>
      <Button className="button" onClick={toggle} hideText>
        Toggle form
      </Button>
    </p>
  );
}

OrderFormToggler.propTypes = {
  className: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
};

export default OrderFormToggler;
