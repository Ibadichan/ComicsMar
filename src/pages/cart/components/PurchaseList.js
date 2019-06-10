import React from "react";
import PropTypes from "prop-types";
import PurchaseItem from "./purchaseItem/Container";

function PurchaseList({ purchases }) {
  return (
    <section className="purchases">
      <h2>Purchase list</h2>

      <ul className="purchase-list">
        {purchases.map(purchase => (
          <PurchaseItem
            key={purchase.id}
            form={`orderProduct${purchase.id}`}
            purchase={purchase}
          />
        ))}
      </ul>
    </section>
  );
}

PurchaseList.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default PurchaseList;
