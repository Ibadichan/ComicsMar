import React from 'react';
import PageLayout from '~/src/common/PageLayout';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <PageLayout title='Contact Us'>
      <ContactList />
      <ContactForm />
    </PageLayout>
  );
}

export default ContactPage;
