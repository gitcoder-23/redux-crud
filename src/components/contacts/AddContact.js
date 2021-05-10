import React, {useState} from 'react'
import shortid from 'shortid'
// to redirect to the next page 1st
import { useHistory } from 'react-router-dom'

// to dispatch the contacts from action during create
// 1st 
import { useDispatch } from 'react-redux'
// 2nd
import { addContact } from '../../actions/contactAction'

const AddContact = () => {
    // to redirect to the next page 2nd
    let history = useHistory();

    // to dispatch the contacts from action during create
    // action store here to create 3rd
    const dispatch = useDispatch();
    // To add input on text field
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");

    // to disable ? mark from url during Submit
    const createContact= (e) =>{
        e.preventDefault();
        // console.log(name, phone, email)
        // 4th new_create
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }

        // create 5th create
        dispatch(addContact(new_contact));
        // to redirect to the next page 3rd
        history.push('/');

    }


    return (
        <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
          {/* to disable ? mark from url during Submit */}
        <form onSubmit={(e) => createContact(e)}>
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
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
    )
}

export default AddContact
