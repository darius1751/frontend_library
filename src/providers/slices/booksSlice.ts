import { createSlice } from '@reduxjs/toolkit';
import { Book, Pagination } from '../../models';
export const initialBooks: Book[] = [];
export const initialPagination: Pagination = {
    actualPage: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    missing: 0,
    nextPage: 0,
    previousPage: 0,
    totalRegisters: 0
}
export type BooksReduxSelector = {
    books:{
        search: string; 
        books: Book[]; 
        pagination: Pagination; 
    }
}
export const booksSlice = createSlice({
    name:'books',
    initialState:{
        search: '',
        books: initialBooks,
        pagination: initialPagination
    }, 
    reducers:{
        setSearch(state, action){
            state.search = action.payload;
        },
        setBooks(state, action){
            state.books = action.payload;
        },
        setPagination(state, action){
            state.pagination = action.payload;
            
        }
        
    }
})
export const { setSearch, setBooks, setPagination } = booksSlice.actions;
export default booksSlice.reducer;