import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadDataAsync, increment } from '../redux/contact';

import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
  } from '@material-ui/core';

export default () =>
{

    const useContacts = useSelector(state => state.contact);
    const counter = useSelector(state => state.contact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDataAsync());
        dispatch(increment());
      }, []);

    // const[contacts, setContacts] = useState([])

    // useEffect(() => {
    //     axios.get('https://address-book-exp-api.herokuapp.com/users')
    //     .then(response => {
    //         //debugger
    //         console.log(response.data.data)
    //         setContacts(response.data.data)
    //     })
    // },[])

    // console.log(contacts)

    return (
        <div>
      <h1>Phone Book</h1>
      {/* {JSON.stringify(stateContact?.contacts)} */}
      {counter.value}
      <List>
        {useContacts.contacts?.map((contact) => (
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt={contact.name} src={contact.image_url} />
            </ListItemAvatar>
            <ListItemText primary={contact.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                
              >
                {contact.favorite ? 'Fav' : 'No'}
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                
              >
                
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
    )
}