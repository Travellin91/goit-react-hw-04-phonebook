
import React, { useState } from 'react';
import './app.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useMemo } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilter = filterValue => {
    setFilter(filterValue);
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <Container>
      <h1 className="app-title">Телефонний довідник</h1>

      <Row>
        <Col md={6}>
          <ContactForms addContact={addContact} contacts={contacts} />
        </Col>
        <Col md={6}>
          <div className="contacts-section">
            <h2 className="contacts-heading">Контакти</h2>
            <Filter value={filter} setFilter={handleFilter} />
            <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: ''
//   };

//   componentDidMount() {
//     const storedContacts = localStorage.getItem('contacts')
//     if (storedContacts) {
//       this.setState({ contacts: JSON.parse(storedContacts) });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (newContact) => {
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact]
//     }));
//   };

//   deleteContact = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id)
//     }));
//   };

//   setFilter = (filterValue) => {
//     this.setState({
//       filter: filterValue
//     });
//   };

//   filteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     return (
//       <Container>
//         <h1 className="app-title">Phonebook</h1>

//         <Row>
//           <Col md={6}>
//             <ContactForms addContact={this.addContact} contacts={contacts} />
//           </Col>
//           <Col md={6}>
//             <div className="contacts-section">
//               <h2 className="contacts-heading">Contacts</h2>
//               <Filter filter={filter} setFilter={this.setFilter} />
//               <ContactList contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

//export default App;
