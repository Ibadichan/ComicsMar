import React from 'react';
import Main from '../../common/components/Main';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <Main headerText='Contact Us'>
      <ContactList />
      <ContactForm />
    </Main>
  );
}

export default ContactPage;
