import { contactPath } from '../helpers/routes';
import ContactPage from '../pages/contacts/index';

const ContactRoute = {
  exact: true,
  strict: true,
  path: contactPath(),
  component: ContactPage
}

export default ContactRoute;
