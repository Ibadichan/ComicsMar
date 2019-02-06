import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import camelize from 'camelize';
import { isNumeric } from '../../helpers/numbers';
import Main from '../../common/components/Main';
import ProductListContext from '../../contexts/products/ProductListContext';
import Photos from './Photos';
import Info from './Info';

function ProductPage({ match }) {
  let { productId, id } = camelize(match.params);
  let photoId;

  if (productId) {
    photoId = id;
  } else {
    productId = id;
  }

  return (
    <ProductListContext.Consumer>
      {
        products => {
          const product = products.filter(product => product.id == productId)[0];

          if (
            !product ||
            (
              photoId &&
              !isNumeric(photoId) ||
              photoId <= 0 ||
              photoId > product.largePhotos.length
            )
          ) {
            return <Redirect to='/404' />;
          }

          return (
            <Main headerText={product.title}>
              {
                photoId ?
                  <Photos product={product} currentPhotoId={photoId} /> :
                  <Photos product={product} />
              }
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
