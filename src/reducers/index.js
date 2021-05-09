// for multiple reducers
// combine multiple reducers
import { combineReducers } from 'redux'
// all created reducers linked here
import {contactReducer} from './contactReducer'

// to access multiple reducers
export default combineReducers({
    //  fetch all datas
    // contactState."contacts" this is accessable
    // to solve this "contactsData.map is not a function"
    // contacts: contactReducer
    contactsValues: contactReducer
})