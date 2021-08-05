import phonebookTypes from "./phonebook-types";
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const handleSubmit = createAction(phonebookTypes.ADD,
    name => ({
        payload: {
            name,
        id: uuidv4()
        }
    }));
export const deleteContact = createAction(phonebookTypes.DELETE) ;
export const filterByName = createAction(phonebookTypes.FILTER)