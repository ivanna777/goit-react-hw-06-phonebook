import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./Contact.module.css";

class Contact extends Component {
    render() {
        const { id, name, number, deleteContact } = this.props;
        return (
            <div className={styles["contact-wrapper"]}> 
            <li key={id} className={styles["contact-li"]}>
                {name}: {number}
            </li>
            <button className={styles["delete-btn"]} type="button" onClick={()=>deleteContact(id)}>
                Delete    
            </button>
                </div>
        )
    }
}

Contact.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    deleteContact: PropTypes.func,
}

export default Contact;