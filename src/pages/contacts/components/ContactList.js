import React from "react";

function ContactList() {
  return (
    <section className="our-contacts">
      <h2>Our contacts:</h2>

      <ul className="contact-list">
        <li className="contact-list-item">
          <b>Telephone</b>
          <p>1-777-777-7777</p>
        </li>
        <li className="contact-list-item">
          <b>Fax</b>
          <p>1-777-777-7777</p>
        </li>
        <li className="contact-list-item">
          <b>Opening Times</b>
          <p>7 days a week from 8:00 am to 5:00 pm</p>
        </li>
      </ul>
    </section>
  );
}

export default ContactList;
