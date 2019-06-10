import React from "react";
import PropTypes from "prop-types";
import Info from "./components/Info";
import OrderForm from "./components/OrderForm";

function PurchaseItem(props) {
  return (
    <li className="purchase-item">
      <Info purchase={props.purchase} />
      <OrderForm {...props} />
    </li>
  );
}

PurchaseItem.propTypes = {
  purchase: PropTypes.object.isRequired
};

export default PurchaseItem;
