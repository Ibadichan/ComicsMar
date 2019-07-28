import React, { Component, Fragment } from "react";
import { Field } from "redux-form";
import { normalizePhone } from "helpers/reduxForm/normalizers";
import { required, string, length, email } from "helpers/reduxForm/validators";
import Input from "common/Input";
import Button from "common/Button";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this._toggleForm = this._toggleForm.bind(this);
  }

  _toggleForm() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { handleSubmit, reset, submitting, pristine } = this.props;
    const formClassName = "purchase-order-form";
    const fieldClassName = `${formClassName}-item`;
    const formVisibility = this.state.isOpen ? "open" : "hidden";

    return (
      <Fragment>
        <p className={`toggle-${formClassName} form-is-${formVisibility}`}>
          Order this product
          <Button className="button" onClick={this._toggleForm} hideText>
            Toggle form
          </Button>
        </p>

        <form
          onSubmit={handleSubmit}
          className={`${formClassName} ${formVisibility}`}
        >
          <div className="purchase-order-form-container">
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
      </Fragment>
    );
  }
}

export default OrderForm;
