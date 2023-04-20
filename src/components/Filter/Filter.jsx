import PropTypes from "prop-types";
import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { createFilter} from 'redux/contacts/contactsReducer';


function Filter ({ value, onChange}) {
    
    const dispatch = useDispatch();

    const inputFilter = (event) => {
    dispatch(createFilter(event.target.value));
  };
  
    return (
        <label className={style.name}>
            Find contacts by name
            <input className={style.input} type='text' value={value} onChange={inputFilter} />
        </label>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default Filter