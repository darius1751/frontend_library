import { FIND_BOOK_BY_CODE } from "../constants/URLS"
import { Book } from "../models";
import { http } from "./http/http"

export const findBookByCode = async ( code: string ) => {
    return await http.get<Book>(FIND_BOOK_BY_CODE+code);
}