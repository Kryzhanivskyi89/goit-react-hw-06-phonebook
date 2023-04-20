import PropTypes from "prop-types";
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';

import {deleteContactList } from './../../redux/contacts/contactsReducer'
import style from './ContactList.module.css';

function ContactList({ contacts }) {

    // const { contacts, FiltersList } = useSelector(state => state.contacts);

//     const visibleContact = () => {    
//     const normalizeFilter = FiltersList.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
//   }

    const deleteContact = (id) => {
        dispatch(deleteContactList(id));
        if (contacts.length === 1) {
            (Notiflix.Notify.warning('Contact book is empty!'));      
        }
    };
    
    const dispatch = useDispatch();
    return (
        <ul className={style.list}>
            {contacts.map(({ id, name, number }) => (
                <li className={style.item} key={id}>
                    <p>
                        {name}: {number}
                    </p>
                    <button className={style.button} type="button" onClick={() => dispatch(deleteContact(id))} >Delete contact</button>
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    
};

export default ContactList