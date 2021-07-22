import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook-reducer';

const store = createStore(phonebookReducer, composeWithDevTools())

export default store
