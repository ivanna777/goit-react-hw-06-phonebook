import phonebookTypes from "./phonebook-types";
import { v4 as uuidv4 } from 'uuid';


export const handleSubmit = (name, number) => ({
    type: phonebookTypes.ADD,
    payload: {
        name,
        number,
        id: uuidv4()
    }
})

export const deleteContact = (id) => ({
    type: phonebookTypes.DELETE,
    payload: id
})

export const filterByName = (text) => ({
    type: phonebookTypes.FILTER,
    payload: text
})