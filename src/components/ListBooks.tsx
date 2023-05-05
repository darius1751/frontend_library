import { CardBook } from "./CardBook"
import {useSelector} from 'react-redux';
import { Book } from "../models";
import { ReduxSelector } from "../providers/reduxStore";
export const ListBooks = () => {
    const books = useSelector<ReduxSelector, Book[]>(({ booksState }) => booksState.books);
    return (
        <article className="list-books">
            {
                books?.map?.( book => <CardBook book={book} key={book.id}/> )
            }
        </article>
   ) 
}