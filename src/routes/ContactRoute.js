import { contactPath } from "helpers/routes";
import { fetchProducts } from "actions/products";
import ContactPage from "pages/contacts";

const ContactRoute = {
  exact: true,
  strict: true,
  path: contactPath(),
  component: ContactPage,
  prepareData(store, query, params, routes) {
    return store.dispatch(fetchProducts());
  }
};

export default ContactRoute;
