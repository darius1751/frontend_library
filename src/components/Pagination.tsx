import { Pagination as PaginationModel} from "../models"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../styles/pagination.css';
export type PropsPagination = {
    pagination: PaginationModel
}
export const Pagination = ({ pagination }: PropsPagination) => {
    const { actualPage, hasNextPage, hasPreviousPage } = pagination;
    return (
        <div className="pagination">
            <FontAwesomeIcon icon={faArrowLeft} className={`pagination-arrow-previous ${hasPreviousPage || 'arrow-disable'}`}/>
            <span className="actual-page">{actualPage}</span>
            <FontAwesomeIcon icon={faArrowRight} className={`pagination-arrow-next ${hasNextPage || 'arrow-disable'}`}/>
        </div>
    );
}