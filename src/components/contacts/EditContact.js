import React, {useState, useEffect} from 'react'
// to redirect to the next page 1st(useHistory)
//for edit data (useParams) 1st
import { useHistory, useParams } from 'react-router-dom'

// to dispatch the contacts from action during create
// 1st 
import { useDispatch, useSelector } from 'react-redux'
// 2nd
import { getContact, updateContact } from '../../actions/contactAction'

const EditContact = () => {

    // for edit data to extract "id" 2nd
    let { id } = useParams();
    // alert(id)
    // to redirect to the next page 2nd
    let history = useHistory();

    // to dispatch the contacts from action during create
    // action store here to create 3rd
    const dispatch = useDispatch();
    // "contact" as a null in reducer
    const getContactData = useSelector((getContactState) => getContactState.contactsValues.contact); 
    // console.log('getContactData->', getContactData);
    // To add input on text field
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");

   
// for get data by page load for edit
    useEffect(() => {
      if(getContactData != null){
        setName(getContactData.name);
        setPhone(getContactData.phone);
        setEmail(getContactData.email);
      }
      // to pass "id" as payload
      dispatch(getContact(id));
    }, [getContactData]); // to prevent infinite loop  []
    // [getContactData] auto fill data by id

    const onUpdateContact = (e) => {
      e.preventDefault();
      // to fetch all data use "Object.assign()"
      const update_contact = Object.assign(getContactData, {
        name: name,
        phone: phone,
        email: email
      });
      console.log('update_contact->', update_contact);

      // create 5th create
      dispatch(updateContact(update_contact));
      // to redirect to the next page 3rd
      history.push('/');

    };

    return (
        <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
          {/* to disable ? mark from url during Submit */}
        <form onSubmit ={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
    )
}

export default EditContact
