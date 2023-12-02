import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  onChangeFilter = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number, contacts, filter } = this.state;

    // Фільтруємо контакти на основі значення поля пошуку
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    console.log(filteredContacts);

    return (
      <>
        <div>
          <h1>Phonebook</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Find contacts by name</h2>
          <input
            name="filter"
            value={filter}
            type="text"
            onChange={this.onChangeFilter}
          />
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name} : {contact.number}
              </li>
            ))}
          </ul>
        </div>

        {/* Використовує фільтровані контакти для відображення */}
        {/* <ContactList contacts={filteredContacts} /> */}
      </>
    );
  }
}

export default App;
