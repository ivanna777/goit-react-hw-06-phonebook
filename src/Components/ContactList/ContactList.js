import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook-actions";
import styles from "./ContactList.module.css"

const ContactList = ({entries, onDelete}) => {
        return (
            <div className={styles["contact-wrapper"]}>
                <ul className={styles["contact-list"]}>
                        {entries.map(({id, name}) => (
                            <li key={id} 
                                className={styles["contact-li"]}>
                                {name.name}: {name.number}

                            <button className={styles["delete-btn"]}
                                    type="button"
                                    data-id={ id}
                                    onClick={onDelete}
                                >
                                     Delete    
                                </button>
                            </li>
                        ))}
                    </ul>  
            </div>
        )
    }

const getFilterName = (entries, filterValue) => {
    console.log(entries)
    return entries.filter(entry => entry.name.name.includes(filterValue));
}

const mapStateToProps = (state) => ({
    entries: getFilterName(state.phonebookReducer.items, state.phonebookReducer.filter)
});

const mapDispatchToProps = dispatch => ({
    onDelete: e => dispatch(deleteContact(e.target.dataset.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
