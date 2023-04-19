import { Pagination as PaginationModel} from "../models"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux';
import '../styles/pagination.css';
import { BooksReduxSelector } from "../providers/slices/booksSlice";
export const Pagination = () => {
    const pagination = useSelector<BooksReduxSelector, PaginationModel>(state => state.books.pagination);
    return (
        <div className="pagination">
            <FontAwesomeIcon icon={faArrowLeft} className={`pagination-arrow-previous ${pagination?.hasPreviousPage || 'arrow-disable'}`}/>
            <span className="actual-page">{pagination?.actualPage}</span>
            <FontAwesomeIcon icon={faArrowRight} className={`pagination-arrow-next ${pagination?.hasNextPage || 'arrow-disable'}`}/>
        </div>
    );
}