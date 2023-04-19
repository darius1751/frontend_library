import {  FormEvent, useEffect, useRef, useState } from "react";
import { fromEvent, throttleTime } from "rxjs";
import { findAllBooks } from "../helpers/findAllBooks";
import { findFlexBooks } from "../helpers/findFlexBooks";
import { useForm } from "../hooks/useForm";
import { Book, Pagination } from "../models";

export type PropsBrowserBooks = {
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>,
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>
};
export type Browser = {
    search: string
}
export const BrowserBooks = ({ setBooks, setPagination }:PropsBrowserBooks) => {

    // const [search, setSearch] = useState<string>("");
    const input = useRef(null);
    // const handleChange = (e: FormEvent<HTMLInputElement>)=>{
    //     const { value } = e.target as HTMLInputElement;
    //     setSearch(value);
    // }
    useEffect(()=>{
        const event = fromEvent(input.current as any, `keyup`)
        .pipe(throttleTime(100))
        .subscribe(async (keyEvent: any) => {
            const search: string = keyEvent.target.value;
            if(search.length === 0){
                const booksPagination = await findAllBooks();
                const { books, pagination } = booksPagination;
                setBooks(books)
                setPagination(pagination);
            }else{
                const booksPagination = await findFlexBooks(search);
                const { books, pagination } = booksPagination;
                setBooks(books)
                setPagination(pagination);
            }
                
        })
        return () => { 
            event.unsubscribe();
        };
    }, [input]);
    
        
    return(
        <article className="browser-books">
            <input type="search" name='search' placeholder="Puedes buscar por: Categoria, Autor, Titulo"  className="browser-books-search" ref={input}/>
        </article>
    )
}