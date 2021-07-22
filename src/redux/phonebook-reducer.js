import { combineReducers } from "redux";
import phonebookTypes from "./phonebook-types";

const itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case phonebookTypes.ADD:
            return [...state, payload]
        
        case phonebookTypes.DELETE:
            return state.filter(contact => contact.id !== payload)
        
        default:
            return state
    }    
}
const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case phonebookTypes.FILTER:
            return payload
        
        default:
            return state
    }
}

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
})

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
