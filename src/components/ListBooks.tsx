import { CardBook } from "./CardBook"
import {useSelector} from 'react-redux';
import { Book, Pagination } from "../models";
import { BooksReduxSelector } from "../providers/slices/booksSlice";
export const ListBooks = () => {
   const books = useSelector<BooksReduxSelector, Book[]>((state)=> state.books.books)
    return (
        <article className="list-books">
            {
                books?.map?.( book => <CardBook book={book} key={book.id}/> )
            }
        </article>
   ) 
}