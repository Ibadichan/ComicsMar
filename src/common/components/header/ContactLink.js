import React from 'react';
import NavLink from '../linkWrappers/NavLink';
import { contactPath } from '../../../helpers/routes';

function ContactLink() {
  return (
    <NavLink to={contactPath()} activeClassName='disabled'>
      Contacts
    </NavLink>
  );
}

export default ContactLink;
