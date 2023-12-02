import css from './ContactForm.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContact(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
              className={css.input}
            />
          </label>

          <label>
            Number:
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
