import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'  // to access the data
import Contact from './Contact';
import {selectAllContact, clearAllContact, deleteAllContact}  from '../../actions/contactAction';





const Contacts = () => {

  const dispatch = useDispatch();

  // click on checkbox all delete
  const [selectAll, setSelectAll] = useState(false);
  // take a parameter
  // to define whole state "state" -> "contacts" means  data
  // const contactsData = useSelector((contactState) => contactState.contacts);
  // if use "combineReducers"
  const contactsData = useSelector((contactState) => contactState.contactsValues.contacts); // "contacts" from reducer

  const selectedContacts = useSelector((contactState) => contactState.contactsValues.selectedContacts); // "selectedContacts" from reducer

  // selectAll delete data
  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContact(contactsData.map(contactId => contactId.id)));
    }else{
      dispatch(clearAllContact())
    }
  }, [selectAll]);  // dependency


    return (
        <div>
           {selectedContacts.length > 0 ? (
              <button
                className="btn btn-danger mb-3"
                onClick={() => dispatch(deleteAllContact())}
              >
                delete all
              </button>
      ) : null}
            <table className="table shadow">
              <thead className="bg-danger text-white">
                <tr>
                <th>
                <div className="custom-control custom-checkbox">
                  <input id="selectAll"
                      type="checkbox"
                      className="custom-control-input"
                      value={selectAll}
                      onClick={()=> {setSelectAll(!selectAll)
                        console.log(selectAll)}}
                      // onClick={()=> {setSelectAll(!selectAll)
                      // console.log(selectAll)}}
                    
                    />
                    <label htmlFor="selectAll" className="custom-control-label"></label>
                </div>
                </th>
                {/* <th>#Sl.No</th> */}
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              </thead>
                <tbody>
                  {contactsData.map((contact) => (
                    // console.log('issdata',contact)
                    // "contact" use as a props to pass data to contact.js
                    <Contact contact= {contact} key={contact.id}
                    selectAll={selectAll} />
                  ))}
              </tbody>
            </table>
        </div>
    )
}

export default Contacts
