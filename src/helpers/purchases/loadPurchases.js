function loadPurchases() {
  try {
    const purchases = JSON.parse(
      localStorage.getItem('purchases') || '[]'
    );

    return purchases;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default loadPurchases;
