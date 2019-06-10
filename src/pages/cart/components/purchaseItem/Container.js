import { reduxForm } from "redux-form";
import history from "~/src/common/history";
import { orderProduct } from "~/src/actions/products";
import { rootPath } from "~/src/helpers/routes";
import orderSerializer from "~/src/helpers/serializers/order";
import PurchaseItem from "./index";

export default reduxForm({
  onSubmit(values, dispatch, props) {
    const payload = orderSerializer({ ...values, purchase: props.purchase });

    dispatch(orderProduct(payload)).then(() => {
      history.push({
        pathname: rootPath(),
        state: {
          message: "The product has been successfully ordered",
          className: "alert-success"
        }
      });
    });
  }
})(PurchaseItem);
