import React from "react";
import PropTypes from "prop-types";

function Textarea(props) {
  const {
    input,
    label,
    className,
    meta: { form, touched, error, warning }
  } = props;
  const id = `${form}-${input.name}`;
  const errorClassName = touched && error ? "error" : "";
  const warningClassName = touched && warning ? "warning" : "";

  return (
    <p className={`${className} ${errorClassName || warningClassName}`}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...input} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </p>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Textarea;
