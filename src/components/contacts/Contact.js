import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';

// to delete 1st 2 imports are useful
import { deleteContact } from '../../actions/contactAction'
import { useDispatch } from 'react-redux'

//  to pass data data use as distructure "contact"
const Contact = ({contact, selectAll}) => {
    // // to delete 2nd
    const dispatch = useDispatch();
    // console.log('distructure',contact);
    const { id, name, phone, email } = contact;
    return (
        
        <tr>
        <td>
        <div className="custom-control custom-checkbox">
            <input
            type="checkbox" checked={selectAll}
            className="custom-control-input"
            />
            <label className="custom-control-label"></label>
        </div>
        </td>
            {/* <th scope="row">{id}</th> */}
            <td><Avatar className="mr-2" name={name} size="45" round={true} /> {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <Link> <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span></Link>
      </td>
        </tr>
        
    )
}

export default Contact
