import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Button from "common/Button";
import OrderForm from "./OrderForm";

function OrderModal({ isOpen, close, formProps }) {
  const modalVisibility = isOpen ? "open" : "hidden";

  return createPortal(
    <div className={`modal-overlay ${modalVisibility}`} onClick={close}>
      <section className={`purchase-order-modal ${modalVisibility}`}>
        <h2>Order purchase in modal</h2>

        <OrderForm {...formProps} />

        <Button className="modal-close" onClick={close} hideText>
          Close
        </Button>
      </section>
    </div>,
    document.getElementById("modal-root")
  );
}

OrderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  formProps: PropTypes.object.isRequired
};

export default OrderModal;
