import { MDBInput, MDBBtn  } from 'mdb-react-ui-kit';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import { useState } from 'react';

export default () =>{

    const [nameContact, setNameContact] = useState('')
    const [phoneContact, setPhoneContact] = useState('')
    const [addressContact, setAddressContact] = useState('')
   
    const onSubmit = () =>
    {
        var data = {
            name: nameContact,
            phone : phoneContact,
            address : addressContact
        }
           
            axios.post('https://address-book-exp-api.herokuapp.com/users', data)
            .then(response => {
                console.log(response.data)               
        })

    }

    // useEffect(() => {
    //     axios.post('https://address-book-exp-api.herokuapp.com/users', data)
    //     .then(response => {
    //         console.log(response.data)
    //         setBlog(response.data)
    //     })
    // },[])

    return (
        <>
            <div style={{ width: '23rem' }}>
               

                <MDBInput label='Name' id='name' type='text' 
                    value={nameContact} 
                    onChange={(e) => setNameContact(e.target.value)}
                />

                <br />
                <MDBInput label='Phone' id='phone' type='text' 
                    value={phoneContact} 
                    onChange={(e) => setPhoneContact(e.target.value)}
                    />

                <br />
                <MDBInput label='Address' id='address' type='text' 
                    value={addressContact} 
                    onChange={(e) => setAddressContact(e.target.value)}
                    />
               
               <br/>
              
               <Button variant="contained" onClick={() => onSubmit()}>Submit</Button>
            </div>
        </>
    )


}