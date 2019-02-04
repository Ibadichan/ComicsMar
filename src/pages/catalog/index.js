import React, { Fragment } from 'react';
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
      <ProductListContext.Consumer>
        {
          products => (
            <Fragment>
              <SlideShow />
              <CatalogList products={products} />
            </Fragment>
          )
        }
      </ProductListContext.Consumer>
    </Main>
  );
}

export default CatalogPage;
