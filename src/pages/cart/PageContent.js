import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '~/src/common/PageLayout';
import PurchaseList from './PurchaseList';

function PageContent({ purchases }) {
  return (
    <PageLayout title='Products added to cart:'>
      <PurchaseList purchases={purchases} />
    </PageLayout>
  );
}

PageContent.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default PageContent;
