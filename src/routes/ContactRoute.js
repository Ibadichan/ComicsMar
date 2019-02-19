import { contactPath } from '~/src/helpers/routes';
import ContactPage from '~/src/pages/contacts';

const ContactRoute = {
  exact: true,
  strict: true,
  path: contactPath(),
  component: ContactPage
}

export default ContactRoute;
