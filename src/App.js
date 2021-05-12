import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';
import editNumber from './helpers/edit-number';

import './styles.scss';

class App extends Component {
  state = {
    contacts: {
      items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    },
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.items !== prevState.contacts.items) {
      localStorage.setItem(
        'savedContacts',
        JSON.stringify(this.state.contacts.items),
      );
    }
  }
  componentDidMount() {
    const { contacts } = this.state;
    const savedContacts = JSON.parse(localStorage.getItem('savedContacts'));
    if (savedContacts) {
      this.setState({
        contacts: {
          ...contacts,
          items: savedContacts,
        },
      });
    }
  }
  addContact = data => {
    const { contacts } = this.state;
    const { items } = this.state.contacts;
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: editNumber(data.number),
    };

    items
      .map(contact => contact.name.toLowerCase())
      .includes(data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: {
            ...contacts,
            items: [...prevState.contacts.items, newContact],
          },
        }));
  };
  deleteContact = id => {
    const { contacts } = this.state;
    this.setState(prevState => ({
      contacts: {
        ...contacts,
        items: prevState.contacts.items.filter(contact => contact.id !== id),
      },
    }));
  };
  getVisibledContacts = () => {
    const { items, filter } = this.state.contacts;
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  changeFilter = e => {
    console.log(e.currentTarget.value);
    const { contacts } = this.state;
    this.setState({
      contacts: {
        ...contacts,
        filter: e.currentTarget.value,
      },
    });
  };

  render() {
    const { filter } = this.state.contacts;
    const visibleContacts = this.getVisibledContacts();
    return (
      <>
        <div className="container">
          <h1 className="title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
