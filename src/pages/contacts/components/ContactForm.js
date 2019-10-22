import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "common/Input";
import Textarea from "common/Textarea";
import Button from "common/Button";
import { rootPath } from "helpers/routes";
import { required, string, email } from "helpers/reduxForm/validators";

function ContactForm({ handleSubmit, reset, submitting, pristine }) {
  const fieldClassName = "contact-form-item";

  return (
    <section className="contact-form">
      <h2>Contact form</h2>

      <form onSubmit={handleSubmit}>
        <div className="contact-form-columns">
          <Field
            name="username"
            component={Input}
            validate={[required, string]}
            label="Your name"
            className={fieldClassName}
          />
          <Field
            name="email"
            component={Input}
            validate={[required, email]}
            type="email"
            label="E-mail address"
            className={fieldClassName}
          />
        </div>

        <Field
          name="enquiry"
          component={Textarea}
          validate={[required]}
          label="Enquiry"
          className={`${fieldClassName} enquiry`}
        />

        <p className="contact-form-buttons">
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
      </form>
    </section>
  );
}

export default reduxForm({
  form: "contact",
  onSubmit(values, dispatch, props) {
    props.history.push({
      pathname: rootPath(),
      state: {
        message: "Thank you for contacting us.",
        className: "alert-success"
      }
    });
  }
})(ContactForm);
