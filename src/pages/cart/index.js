import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { rootPath } from "helpers/routes";
import PageLayout from "common/PageLayout";
import Link from "common/linkWrappers/Link";
import PurchaseList from "./components/PurchaseList";

function CartPage({ purchases, pageTitle }) {
  return (
    <PageLayout title={pageTitle}>
      <Helmet>
        <title>{`My purchases(${purchases.length})`}</title>
      </Helmet>

      {purchases.length == 0 ? (
        <Link className="button cart-page__homepage-link" to={rootPath()}>
          To homepage
        </Link>
      ) : (
        <PurchaseList purchases={purchases} />
      )}
    </PageLayout>
  );
}

CartPage.propTypes = {
  purchases: PropTypes.array.isRequired,
  pageTitle: PropTypes.string.isRequired
};

export default CartPage;
