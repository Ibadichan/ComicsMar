import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', emailAddress: '', enquiry: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(() => ({ [name]: value }));
  }

  render() {
    return (
      <section className='contact-form'>
        <h2>Contact form</h2>

        <form action='/contacts' method='POST'>
          <p className='contact-form-item'>
            <label htmlFor='contact-form-name'>Your name</label>
            <input
              type='text'
              name='username'
              id='contact-form-name'
              className='contact-form-name'
              onChange={this.handleInputChange}
              required
            />
          </p>
          <p className='contact-form-item'>
            <label htmlFor='contact-form-email'>E-mail address</label>
            <input
              type='email'
              name='emailAddress'
              id='contact-form-email'
              className='contact-form-email'
              onChange={this.handleInputChange}
              required
            />
          </p>
          <p className='contact-form-item'>
            <label htmlFor='contact-form-enquiry'>Enquiry</label>
            <textarea
              name='enquiry'
              id='contact-form-enquiry'
              className='contact-form-enquiry'
              onChange={this.handleInputChange}
              required
            ></textarea>
          </p>

          <button type='submit'>Submit</button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
