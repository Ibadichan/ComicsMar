import React from 'react';
import Main from '../../common/components/Main';
import ProductListContext from '../../contexts/products/ProductListContext';
import CatalogList from './CatalogList';

function CatalogPage() {
  return (
    <Main headerText='ComicsMar - World of comics'>
      <ProductListContext.Consumer>
        {
          products => <CatalogList products={products} />
        }
      </ProductListContext.Consumer>
    </Main>
  );
}

export default CatalogPage;
