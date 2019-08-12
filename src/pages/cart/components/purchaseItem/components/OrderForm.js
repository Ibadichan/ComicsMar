import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { normalizePhone } from "helpers/reduxForm/normalizers";
import { required, string, length, email } from "helpers/reduxForm/validators";
import Input from "common/Input";
import Button from "common/Button";

function OrderForm(props) {
  const {
    handleSubmit,
    reset,
    submitting,
    pristine,
    formClassName,
    isOpen
  } = props;

  const formVisibility = isOpen ? "open" : "hidden";
  const fieldClassName = `${formClassName}-item`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${formClassName} ${formVisibility}`}
    >
      <div className={`${formClassName}-container`}>
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

        <p className={`${formClassName}-buttons`}>
          <Button type="submit" className="button" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="reset"
            className="button"
            disabled={submitting || pristine}
            onClick={reset}
          >
            Reset
          </Button>
        </p>
      </div>
    </form>
  );
}

OrderForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  formClassName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default OrderForm;
