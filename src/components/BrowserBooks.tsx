import {   FormEvent, useEffect, useRef, useState } from "react";
import { fromEvent, throttleTime } from "rxjs";
import { findAllBooks } from "../helpers/findAllBooks";
import { findFlexBooks } from "../helpers/findFlexBooks";
import { Book, Pagination } from "../models";
import {useDispatch, useSelector} from 'react-redux';
import { BooksReduxSelector, setBooks, setPagination, setSearch } from "../providers/slices/booksSlice";

export const BrowserBooks = () => {
    const $search = useRef(null);
    const dispatch = useDispatch();
    const search = useSelector<BooksReduxSelector, string>(state => state.books.search);
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target as HTMLInputElement;
        dispatch(setSearch(value));
    }
    useEffect(() => {
        const event = fromEvent($search.current as any, `keyup`)
        .pipe(throttleTime(100))
        .subscribe(async (keyEvent: any) => {
            const query: string = keyEvent.target.value;
            if(query.length === 0){
                const booksPagination = await findAllBooks();
                const { books:booksAPI, pagination: paginationAPI} = booksPagination;
                dispatch(setBooks(booksAPI));
                dispatch(setPagination(paginationAPI));
            }else{
                const booksPagination = await findFlexBooks(query);
                const { books: booksAPI, pagination: paginationAPI } = booksPagination;
                dispatch(setBooks(booksAPI));
                dispatch(setPagination(paginationAPI));
            }
                
        })
        return () => { 
            event.unsubscribe();
        };
    }, [$search]);
    
        
    return(
        <article className="browser-books">
            <input type="search" name='search' placeholder="Puedes buscar por: Categoria, Autor, Titulo" value={search} onChange = {handleChange} className="browser-books-search" ref={$search}/>
        </article>
    )
}