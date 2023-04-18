import { Book } from "../models"
import { CardBook } from "./CardBook"

export type ListBooksProps = {
    books: Book[]
}
export const ListBooks = ({ books} :ListBooksProps) => {
   return (
        <article className="list-books">
            {
                books.map( book => <CardBook book={book} key={book.id}/> )
            }
        </article>
   ) 
}