import React from 'react';
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
          const product = products.filter(product => product.id === id)[0];

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

export default ProductPage;
