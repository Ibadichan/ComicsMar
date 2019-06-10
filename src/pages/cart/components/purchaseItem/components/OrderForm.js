import React from "react";
import { Field } from "redux-form";
import { normalizePhone } from "~/src/helpers/reduxForm/normalizers";
import {
  required,
  string,
  length,
  email
} from "~/src/helpers/reduxForm/validators";
import Input from "~/src/common/Input";
import Button from "~/src/common/Button";

function OrderForm({ handleSubmit, reset, submitting, pristine }) {
  const fieldClassName = "purchase-order-form-item";

  return (
    <form onSubmit={handleSubmit} className="purchase-order-form">
      <Field
        name="surname"
        component={Input}
        validate={[required, string]}
        label="Surname"
        className={fieldClassName}
      />
      <Field
        name="name"
        component={Input}
        validate={[required, string]}
        label="Name"
        className={fieldClassName}
      />
      <Field
        name="patronym"
        component={Input}
        validate={[required, string]}
        label="Patronym"
        className={fieldClassName}
      />
      <Field
        name="phone"
        component={Input}
        normalize={normalizePhone}
        validate={[required, length(12)]}
        type="tel"
        label="Phone"
        className={fieldClassName}
      />
      <Field
        name="email"
        component={Input}
        validate={[required, email]}
        type="email"
        label="Email"
        className={fieldClassName}
      />
      <Field
        name="address"
        component={Input}
        validate={[required]}
        label="Address"
        className={fieldClassName}
      />

      <Button type="submit" disabled={submitting}>
        Submit
      </Button>
      <Button type="reset" disabled={submitting || pristine} onClick={reset}>
        Reset
      </Button>
    </form>
  );
}

export default OrderForm;
