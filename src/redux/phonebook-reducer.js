import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import phonebookTypes from "./phonebook-types";

const filterReducer = createReducer('', {
    [ phonebookTypes.FILTER]: (_, action) => action.payload
})

const itemsReducer = createReducer([], {
    [phonebookTypes.ADD]: (state, action) => [...state, action.payload],
    [phonebookTypes.DELETE]: (state, action) => state.filter(contact => contact.id !== action.payload)
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
