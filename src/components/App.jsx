// import Notiflix from 'notiflix';
// import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// import {
  // createContact,
  // createFilter,
  // deleteContactList,
// } from 'redux/contacts/contactsReducer';

import ContactElem from "./ContactElem/ContactElem";
import ContactForm from './ContactForm/ContactForm';
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

const App = () => {   
  
  const { contacts, FiltersList } = useSelector(state => state.contacts);
  // const dispatch = useDispatch();
  
  // const addContact = event => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const { name, number } = form.elements;

  //   if (contacts.find(contact =>
  //     contact.name.toLowerCase() === name.value.toLowerCase())
  //     ) {
  //     alert('The contact already exists with this name');
  //   return;
  //   }
  //   const contact = {
  //     name: name.value,
  //     number: number.value,
  //     id: nanoid(),      
  //   };

  //   dispatch(createContact(contact));
  //   form.reset();
  // };
  

  // const inputFilter = (event) => {
  //   dispatch(createFilter(event.target.value));
  // };

  const visibleContact = () => {    
    const normalizeFilter = FiltersList.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }
   
  return (
    <>
      <ContactElem title="Phonebook">
        <ContactForm />
      </ContactElem>
      <ContactElem title="Contacts">
        {contacts.length > 1 &&
          (<Filter value={FiltersList}  />)
        }
        {contacts.length > 0 &&
          (<ContactList contacts={visibleContact()}  />) 
        }                    
      </ContactElem>
    </>
  );
};


export default App;