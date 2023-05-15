import { CREATE_BOOK } from "../../constants/URLS"
import { Book } from "../../models"
import { http } from "./http"

export const httpCreateBook = async (newBook: FormData, token: string) => {
    return await http.post<Book,FormData>(CREATE_BOOK, newBook ,{
        'content-type':'multipart/form-data',
        token    
    });
}