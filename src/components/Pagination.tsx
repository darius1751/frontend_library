import { Pagination as PaginationModel} from "../models"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from 'react-redux';
import '../styles/pagination.css';
import { BooksReduxSelector, setBooks, setPagination } from "../providers/slices/booksSlice";
import {  MouseEvent } from "react";
import { findAllBooks } from "../helpers/findAllBooks";
import { findFlexBooks } from "../helpers/findFlexBooks";
const TAKE = 10;
export const Pagination = () => {
    const [pagination, search] = useSelector<BooksReduxSelector, [PaginationModel, string]>(({books}) => [books.pagination, books.search]);
    const dispatch = useDispatch();
    const { hasPreviousPage, previousPage, actualPage, hasNextPage } = pagination;
    const handleNext = async (e:MouseEvent) => {
        e.preventDefault();
        if(hasNextPage){
            if(search.length === 0){
                const { books: booksAPI, pagination: paginationAPI } = await findAllBooks(actualPage*TAKE,TAKE);
                dispatch(setBooks(booksAPI));
                dispatch(setPagination(paginationAPI));
            }else{
                const { books: booksAPI, pagination: paginationAPI } = await findFlexBooks(search , actualPage*TAKE ,TAKE);
                dispatch(setBooks(booksAPI));
                dispatch(setPagination(paginationAPI));
            }                
        }
            
    }
    const handlePrevious = async (e:MouseEvent) => {
        e.preventDefault();
        if(hasPreviousPage){
            if(search.length === 0){
                const { books: booksAPI, pagination: paginationAPI } = await findAllBooks(previousPage - TAKE,TAKE);
                dispatch(setBooks(booksAPI));
                dispatch(setPagination(paginationAPI));
            }else{
                const { books: booksAPI, pagination: paginationAPI } = await findFlexBooks(search , previousPage - TAKE ,TAKE);
                dispatch(setBooks(booksAPI));
                dispatch(setPagination(paginationAPI));
            }                
        }
    }
    return (
        <div className="pagination">
            <FontAwesomeIcon icon={faArrowLeft} className={`pagination-arrow-previous ${hasPreviousPage || 'arrow-disable'}`} onClick={handlePrevious}/>
            <span className="actual-page">{actualPage}</span>
            <FontAwesomeIcon icon={faArrowRight} className={`pagination-arrow-next ${hasNextPage || 'arrow-disable'}`} onClick={handleNext}/>
        </div>
    );
}