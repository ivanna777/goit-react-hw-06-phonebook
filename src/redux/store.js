import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook-reducer';

// const store = createStore(phonebookReducer, composeWithDevTools())

const store = configureStore({
    reducer: {
        phonebookReducer
    }
})

export default store
