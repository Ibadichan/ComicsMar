import React from "react";
import PropTypes from "prop-types";
import WrappedImage from "common/images/WrappedImage";

function Info({ purchase }) {
  const { title, photoFull, price, quantity } = purchase;

  return (
    <div className="purchase-item-info">
      <h3>{title}</h3>

      <WrappedImage
        image={photoFull}
        wrapper={{
          node: "p",
          attributes: { className: "purchase-item-image" }
        }}
      />

      <p className="purchase-item-price">
        Price: <b>{price}$</b>
      </p>

      <p className="purchase-item-quantity">
        Quantity: <b>{quantity}</b>
      </p>

      <p className="purchase-item-total-price">
        Total Price: <b>{price * quantity}$</b>
      </p>
    </div>
  );
}

Info.propTypes = {
  purchase: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photoFull: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default Info;
