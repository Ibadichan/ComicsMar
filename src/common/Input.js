import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const {
    input,
    type,
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
      <input type={type} id={id} {...input} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </p>
  );
}

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Input;
