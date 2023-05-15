import { Pagination as PaginationModel} from "../models"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from 'react-redux';
import { setBooks, setPagination } from "../providers/slices/booksSlice";
import {  MouseEvent } from "react";
import { findAllBooks } from "../helpers/http/findAllBooks";
import { findFlexBooks } from "../helpers/http/findFlexBooks";
import { ReduxSelector } from "../providers/reduxStore";
import '../styles/pagination.css';
const TAKE = 10;
export const Pagination = () => {
    const [pagination, search] = useSelector<ReduxSelector, [PaginationModel, string]>(({booksState}) => [booksState.pagination, booksState.search]);
    
    const { hasPreviousPage, previousPage, actualPage, hasNextPage } = pagination;
    const dispatch = useDispatch();
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