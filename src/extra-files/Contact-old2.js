import React from 'react'


//  to pass data data use as distructure "contact"
const Contact = ({contact}) => {
    console.log('distructure',contact)
    return (
        
        <tr>
                <td><div className="custom-control custom-checkbox">
            <input
                type="checkbox"
                className="custom-control-input"
            />
            <label className="custom-control-label"></label>
        </div></td>
                <th scope="row">{contact.id}</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
            </tr>
        
    )
}

export default Contact
