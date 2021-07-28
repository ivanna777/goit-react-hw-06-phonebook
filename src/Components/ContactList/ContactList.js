import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook-actions";
// import Contact from "../Contact";
// import PropTypes from 'prop-types';
import styles from "./ContactList.module.css"

const ContactList = ({entries, onDelete}) => {
        return (
            <div className={styles["contact-wrapper"]}>
                <ul className={styles["contact-list"]}>
                        {entries.map(({id, name, number}) => (
                            <li key={id} 
                                className={styles["contact-li"]}>
                                {name}: {number}

                            <button className={styles["delete-btn"]}
                                    type="button"
                                    data-id={ id}
                                    onClick={onDelete}
                                    
                                >
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
                    </ul> 
                    
                
            </div>
        )
    }


const getFilterName = (entries, filterValue) => {
    console.log(entries)
    console.log(filterValue)
    return entries.filter(entry => entry.name.includes(filterValue));
}
//   getFilterName()



const mapStateToProps = (state) => ({
    entries: getFilterName(state.items, state.filter)
});

const mapDispatchToProps = dispatch => ({
    onDelete: e => dispatch(deleteContact(e.target.dataset.id))
        // id => dispatch(deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
