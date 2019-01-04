import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header/Header';
import Main from '../common/Main';
import CatalogList from './CatalogList';

function Catalog({ products }) {
  return (
    <Fragment>
      <Header />
      <Main>
        <CatalogList products={products} />
      </Main>
    </Fragment>
  );
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired
};

export default Catalog;
