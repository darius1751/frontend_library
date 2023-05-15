import { FIND_ALL_AUTHORS } from "../../constants/URLS"
import { Author } from "../../models";
import { http } from "./http"

export const findAllAuthors = async (token: string) => {
    return await http.get<Author[]>(FIND_ALL_AUTHORS, { token });
}