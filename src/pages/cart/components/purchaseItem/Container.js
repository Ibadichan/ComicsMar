import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { orderProduct } from "actions/products";
import { rootPath } from "helpers/routes";
import orderSerializer from "helpers/serializers/order";
import PurchaseItem from "./index";

export default withRouter(
  reduxForm({
    onSubmit(values, dispatch, props) {
      const payload = orderSerializer({ ...values, purchase: props.purchase });

      dispatch(orderProduct(payload)).then(() => {
        props.history.push({
          pathname: rootPath(),
          state: {
            message: "The product has been successfully ordered",
            className: "alert-success"
          }
        });
      });
    }
  })(PurchaseItem)
);
