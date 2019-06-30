import React from "react";
import PageLayout from "common/PageLayout";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <ContactList />
      <ContactForm />
    </PageLayout>
  );
}

export default ContactPage;
