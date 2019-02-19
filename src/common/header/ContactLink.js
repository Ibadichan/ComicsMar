import React from 'react';
import NavLink from '../linkWrappers/NavLink';
import { contactPath } from '~/src/helpers/routes';

function ContactLink() {
  return (
    <NavLink to={contactPath()} activeClassName='active'>
      Contacts
    </NavLink>
  );
}

export default ContactLink;
