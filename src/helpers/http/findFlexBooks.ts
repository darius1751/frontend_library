import { FIND_FLEX_BOOKS } from "../../constants/URLS"
import { BookPagination } from "./findAllBooks";
import { http } from "./http"

export const findFlexBooks = async (query: string, skip: number = 0, take: number = 10): Promise<BookPagination> => {
    const booksPagination = await http.get<BookPagination>(FIND_FLEX_BOOKS + new URLSearchParams({
        query, 
        skip: skip.toString(), 
        take: take.toString()
    }
    ));
    return booksPagination;
}