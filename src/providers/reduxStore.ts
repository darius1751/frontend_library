import {configureStore} from '@reduxjs/toolkit';
import booksReducer, { BooksReduxSelector } from './slices/booksSlice';
import personReducer, { PersonReduxSelector } from './slices/personSlice';
export type ReduxSelector = {
    personState: PersonReduxSelector,
    booksState: BooksReduxSelector
}
export const reduxStores =  configureStore({
    reducer:{
        booksState: booksReducer,
        personState: personReducer
    }
})