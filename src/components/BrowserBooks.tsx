import { FormEvent, useEffect, useRef } from "react";
import { fromEvent, throttleTime } from "rxjs";
import { findAllBooks } from "../helpers/http/findAllBooks";
import { findFlexBooks } from "../helpers/http/findFlexBooks";
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setPagination, setSearch } from "../providers/slices/booksSlice";
import { ReduxSelector } from "../providers/reduxStore";

export const BrowserBooks = () => {
    const $search = useRef(null);
    const dispatch = useDispatch();
    const search = useSelector<ReduxSelector, string>(({booksState}) => booksState.search);
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