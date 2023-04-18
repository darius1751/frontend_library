import { useEffect, useState } from "react";
import { Back } from "../components/Back";
import { BrowserBooks } from "../components/BrowserBooks";
import { ListBooks } from "../components/ListBooks";
import { Pagination } from "../components/Pagination";
import { findAllBooks } from "../helpers/findAllBooks";
import { Book, Pagination as PaginationModel } from "../models"
import '../styles/books.css';
const initialBooks: Book[] = [];
const initialPagination: PaginationModel = {
    actualPage: 1,
    hasNextPage: true,
    hasPreviousPage: false,
    missing: 0,
    nextPage: 1,
    previousPage: 0,
    totalRegisters: 2
}
export const Books = () => {
    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [pagination, setPagination] = useState<PaginationModel>(initialPagination);
    useEffect(() => {
        findAllBooks().then((bookPagination) => {
            const { books: booksAPI, pagination } = bookPagination;
            setBooks(booksAPI);
            setPagination(pagination);
        });
    }, []);
    return (
        <div className="content">
            <div className="page">
                <Back/>
                <BrowserBooks />
                <ListBooks books={books} />
                <Pagination pagination={pagination} />
            </div>
        </div>

    )
}