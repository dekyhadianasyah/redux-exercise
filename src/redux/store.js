import {configureStore} from '@reduxjs/toolkit'
import contactReduce from './contact'

export default configureStore({
    reducer : {
        contact : contactReduce
    }

})