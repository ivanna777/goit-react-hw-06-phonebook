import { Component } from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook-actions";
// import Contact from "../Contact";
// import PropTypes from 'prop-types';
import styles from "./ContactList.module.css"

class ContactList extends Component {  
    render() {
        const {entries, deleteContact} = this.props;
        return (
            <div className={styles["contact-wrapper"]}>

                {entries.length > 0 ?
                    (<ul className={styles["contact-list"]}>
                        {entries.map(({id, name, number, }) => (
                            <li key={id} 
                                className={styles["contact-li"]}>
                                {name}: {number}

                            <button className={styles["delete-btn"]}
                                type="button"
                                onClick={ deleteContact(id)}>
                                     Delete    
                                </button>
                            </li>
                            
                            // <Contact
                            //     id={entry.id}
                            //     name={entry.name}
                            //     number={entry.number}
                            //     deleteContact={deleteContact}
                            // />
                        ))}
                    </ul>) :
                    (<p className={styles["absent-contact"]}>Such contact is absent</p>)
                }
            </div>
        )
    }
}

// 


const getFilterName = (entries, filterValue) => {
    return entries.filter(entry => entry.name.includes(filterValue));
  }

const mapStateToProps = (state) => ({
  entries: getFilterName(state.items, state.filter),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
