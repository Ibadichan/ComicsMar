import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '~/src/common/PageLayout';
import Gallery from './Gallery';
import Info from './Info';

function PageContent({ product }) {
  return (
    <PageLayout title={product.title}>
      <Gallery product={product} />
      <Info product={product} />
    </PageLayout>
  );
}

PageContent.propTypes = {
  product: PropTypes.object.isRequired
};

export default PageContent;
