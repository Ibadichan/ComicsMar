import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { rootPath } from "helpers/routes";
import PageLayout from "common/PageLayout";
import PurchaseList from "./components/PurchaseList";

function CartPage({ purchases }) {
  if (purchases.length == 0) {
    return (
      <Redirect
        to={{
          pathname: rootPath(),
          state: {
            message: "Cart is empty, add something",
            className: "alert-info"
          }
        }}
      />
    );
  }

  return (
    <PageLayout title="Products added to cart:">
      <PurchaseList purchases={purchases} />
    </PageLayout>
  );
}

CartPage.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default CartPage;
