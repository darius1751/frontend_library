import { ADD_CATEGORY_IN_BOOK } from "../../constants/URLS"
import { Book } from "../../models"
import { http } from "./http"

export const addCategories = async (id: string, categories:string[], token: string) => {
    return await http.patch<any, {categories: string[]}>(ADD_CATEGORY_IN_BOOK+`${id}/categories`,{categories}, {token} );

}