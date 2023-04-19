import {configureStore} from '@reduxjs/toolkit';
import booksReducer from '../slices/booksSlice';
export const bookStore =  configureStore({
    reducer:{
        books: booksReducer
    }
})