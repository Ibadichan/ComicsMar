function orderSerializer(data) {
  const payload = JSON.stringify({ fields: data }, (key, value) => {
    if (data[key] === value) return { "en-US": value };
    return value;
  });

  return payload;
}

export default orderSerializer;
