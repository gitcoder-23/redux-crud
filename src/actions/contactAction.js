// action types
// types are in types.js
import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_SELECTED_CONTACT } from '../constant/types'




// Operation of action add type here
// export const addContact = (contact) => {
//     return {
//       // object
//       type: CREATE_CONTACT,
//       payload: contact,
//     }
//   } use for increment/ decrement then return

export const addContact = (contact) => ({
    // object
    type: CREATE_CONTACT,
    payload: contact, // opject
})

// get a contact for edit
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
})

// update contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact, // opject
})

//  DELETE contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
})

//  SELECTALL contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
})

//  CLEAR contact to clean all data no need payload
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
})

//  DELETE_SELECTED_CONTACT contact to clean all data no need payload
export const deleteAllContact = () => ({
  type: DELETE_SELECTED_CONTACT,
})


