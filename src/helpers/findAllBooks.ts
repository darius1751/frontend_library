import { URLS } from "../constants/URLS"
import { Book, Pagination } from "../models"
import { http } from "./http/http"
export type BookPagination = {
    books: Book[],
    pagination: Pagination
};
export const findAllBooks = async (skip: number = 0, take: number = 10): Promise<BookPagination> => {
    
    return await http.get<BookPagination>(URLS.FIND_ALL_BOOKS+'?'+new URLSearchParams({
        skip: skip.toString(),
        take: take.toString()        
    }));    
}