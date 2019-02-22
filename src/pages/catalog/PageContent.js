import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '~/src/common/PageLayout';
import CatalogList from './CatalogList';
import NoticeMessage from './NoticeMessage';
import Slideshow from './Slideshow';

function PageContent({ location, products }) {
  return (
    <PageLayout title='ComicsMar - World of comics'>
      {
        location.state &&
        location.state.message &&
        <NoticeMessage text={location.state.message} />
      }
      <Slideshow />
      <CatalogList products={products} />
    </PageLayout>
  );
}

PageContent.propTypes = {
  location: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default PageContent;
