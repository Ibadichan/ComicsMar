function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

export { isNumeric };
