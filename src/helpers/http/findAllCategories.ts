import { FIND_ALL_CATEGORIES } from "../../constants/URLS";
import { Category } from "../../models";
import { http } from "./http"

export const findAllCategories = async (token: string) => {
    return await http.get<Category[]>(FIND_ALL_CATEGORIES, {token});
}