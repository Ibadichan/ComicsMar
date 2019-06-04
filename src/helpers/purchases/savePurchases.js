function savePurchases(purchases) {
  try {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  } catch (error) {
    console.error(error);
  }
}

export default savePurchases;
