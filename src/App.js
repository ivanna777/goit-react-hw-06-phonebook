import { Component } from 'react';
import ContactForm from "./Components/ContactForm";
import ContactList from './Components/ContactList';
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    // contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
    entries: [],
    name: '',
    number: ''
  }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts})
  //   }
  // }

  // componentDidUpdate(prevProp, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.contacts.some(({ name }) => name === this.state.name)) {
  //     alert(`${this.state.name} is already in contacts.`);
  //     return;
  //   };

  //   this.setState(prevState => {
  //     return ({
  //       contacts: [...prevState.contacts, { name: prevState.name, number: prevState.number, id: uuidv4() } ]
  //     })
      
  //   })
  // }

  // filterByName = (e) => {
  //   const filterName = e.target.value.toLowerCase();
  //   this.setState({ filter: filterName });
  // }

  // getFilterName = () => {
  //   const { filter, contacts } = this.state;
  //   return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter));
  // }

  // deleteContact = (id) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact=>contact.id !== id)
  //   }))
  // }

  render() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
          // onSubmit={this.handleSubmit}
          // onChange={this.handleChange}
        />
      <h2>Contacts</h2>
      <Filter
        // filtredName={this.filterByName}
      />
      <ContactList
        // contacts={this.getFilterName()}
        // deleteContact={this.deleteContact}  
        />
    </div>
  )
}
}
export default App;
