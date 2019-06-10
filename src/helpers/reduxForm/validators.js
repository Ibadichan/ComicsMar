function required(value) {
  if (!value) return "Required";
}

function string(value) {
  if (value && !/^[a-zA-Z]+$/.test(value)) return "Must be a string";
}

function length(length) {
  return function(value) {
    if (value && value.length != length) {
      return `The field length must be ${length} characters`;
    }
  };
}

function email(value) {
  const isInvalid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  if (value && isInvalid) return "Invalid email address";
}

export { required, string, length, email };
