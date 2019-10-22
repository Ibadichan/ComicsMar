import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "common/PageLayout";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function ContactPage(props) {
  return (
    <PageLayout title="Contact Us">
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ContactList />
      <ContactForm {...props} />
    </PageLayout>
  );
}

export default ContactPage;
