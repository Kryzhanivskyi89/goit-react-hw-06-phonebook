import React from "react";
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector} from 'react-redux';
import {createContact} from 'redux/contacts/contactsReducer';

import style from './ContactForm.module.css';


const ContactForm = () => {    

    const dispatch = useDispatch();  
    const { contacts } = useSelector(state => state.contacts);

    const addContact = event => {
        event.preventDefault();

        const form = event.target;
        const { name, number } = form.elements;

        if (contacts.find(contact =>
        contact.name.toLowerCase() === name.value.toLowerCase())
        ) {
            alert('The contact already exists with this name');
            return;
        }
        const contact = {
            name: name.value,
            number: number.value,
            id: nanoid(),      
        };

        dispatch(createContact(contact));
        form.reset();
    };

return (
    <form onSubmit={addContact}>
        <label className={style.title}>Name
            <input className={style.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <label  className={style.title}>Number
            <input className={style.input}
                placeholder="000-00-00"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button className={style.button} type="submit">
            Add contact
            </button>
    </form>
    );
};

export default ContactForm;