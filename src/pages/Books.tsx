import { useEffect} from "react";
import { Back } from "../components/Back";
import { BrowserBooks } from "../components/BrowserBooks";
import { ListBooks } from "../components/ListBooks";
import { Pagination } from "../components/Pagination";
import { findAllBooks } from "../helpers/findAllBooks";
import {  useDispatch} from 'react-redux';
import '../styles/books.css';
import { setBooks, setPagination} from "../providers/slices/booksSlice";

export const Books = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const bookPagination = await findAllBooks();
            const { books: booksAPI, pagination } = bookPagination;
            dispatch(setBooks(booksAPI));
            dispatch(setPagination(pagination));
        })();
    }, []);
    return (
        <div className="content">
            <div className="page">
                <Back/>
                <BrowserBooks/>
                <ListBooks  />
                <Pagination />
            </div>
        </div>

    )
}