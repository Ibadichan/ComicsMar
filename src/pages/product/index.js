import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Main from '../../common/components/Main';
import ProductListContext from '../../contexts/products/ProductListContext';
import Photos from './Photos';
import Info from './Info';

function ProductPage({ match }) {
  const id = match.params.id;

  return (
    <ProductListContext.Consumer>
      {
        products => {
          const product = products.filter(product => product.id == id)[0];

          if (!product) {
            return <Redirect to='/404' />;
          }

          return (
            <Main headerText={product.title}>
              <Photos product={product} />
              <Info product={product} />
            </Main>
          );
        }
      }
    </ProductListContext.Consumer>
  );
}

ProductPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ProductPage;
