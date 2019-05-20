import React from "react";
import PropTypes from "prop-types";
import WrappedImage from "~/src/common/images/WrappedImage";
import Link from "~/src/common/linkWrappers/Link";
import Commerce from "./components/Commerce";
import { productPath } from "~/src/helpers/routes";

function CatalogItem({ product, addProductToCart }) {
  const { id, title, photoFull, price } = product;

  return (
    <li className="catalog-item">
      <Link to={productPath(id)}>
        <h3 className="catalog-item-header">
          {title} <b className="catalog-item-price">{price}$</b>
        </h3>
        <WrappedImage
          image={photoFull}
          wrapper={{
            node: "p",
            attributes: { className: "catalog-item-image" }
          }}
        />
      </Link>
      <Commerce product={product} addProductToCart={addProductToCart} />
    </li>
  );
}

CatalogItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photoFull: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired
};

export default CatalogItem;
