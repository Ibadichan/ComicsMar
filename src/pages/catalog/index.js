import React from 'react';
import PropTypes from 'prop-types';
import Main from '../../common/components/Main';
import ProductListContext from '../../contexts/products/ProductListContext';
import CatalogList from './CatalogList';
import NoticeMessage from './NoticeMessage';
import SlideShow from './slideShow/SlideShow';

function CatalogPage({ location }) {
  return (
    <Main headerText='ComicsMar - World of comics'>
      {
        location.state &&
        location.state.message &&
        <NoticeMessage text={location.state.message} />
      }
      <SlideShow />
      <ProductListContext.Consumer>
        {
          products => <CatalogList products={products} />
        }
      </ProductListContext.Consumer>
    </Main>
  );
}

CatalogPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default CatalogPage;
