import React from "react";
import PropTypes from "prop-types";
import Link from "common/linkWrappers/Link";
import WrappedImage from "common/images/WrappedImage";
import { productPath } from "helpers/routes";

function Info({ purchase }) {
  const { id, title, photoFull, price, quantity } = purchase;

  return (
    <div className="purchase-item-info">
      <Link to={productPath(id)}>
        <h3>{title}</h3>

        <WrappedImage
          image={photoFull}
          wrapper={{
            node: "p",
            attributes: { className: "purchase-item-image" }
          }}
        />
      </Link>

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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photoFull: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default Info;
