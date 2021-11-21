import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const loadDataAsync = createAsyncThunk('loadData', async () => {
    return axios.get('https://address-book-exp-api.herokuapp.com/users');
  });

export const contactSlice = createSlice({
    name : 'contact',
    initialState : {
        contacts : [] ,
        loading : false,
        value : 10
    },
    reducers : {
      increment : (state, actions) =>{
        state.value++
      },
        addContact : (state, actions) =>{
            state.contacts = [...state.contacts. actions.payload]
        }
    },
    extraReducers: {
    [loadDataAsync.pending]: state => {
      state.loading = true;
    },
    [loadDataAsync.fulfilled]: (state, actions) => {
      console.log(actions?.payload?.data?.data);
      state.loading = false;
      state.contacts = actions?.payload?.data?.data ?? [];
      console.log(state.contacts)
    }
  }
})

export const { increment, addContact } = contactSlice.actions

export default contactSlice.reducer
