import {configureStore} from '@reduxjs/toolkit';
import booksReducer, { BooksReduxState } from './slices/booksSlice';
import personReducer, { PersonReduxState } from './slices/personSlice';
export type ReduxSelector = {
    personState: PersonReduxState,
    booksState: BooksReduxState
}
export const reduxStores =  configureStore({
    reducer:{
        booksState: booksReducer,
        personState: personReducer
    }
})