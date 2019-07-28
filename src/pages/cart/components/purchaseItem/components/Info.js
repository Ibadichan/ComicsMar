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

      <table className="purchase-item-table">
        <tbody>
          <tr>
            <th>Price</th>
            <td>{price}$</td>
          </tr>

          <tr>
            <th>Quantity</th>
            <td>{quantity}</td>
          </tr>

          <tr>
            <th>Total Price</th>
            <td>{price * quantity}$</td>
          </tr>
        </tbody>
      </table>
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
