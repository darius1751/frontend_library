import { FIND_ONE_ROLE_BY_ID } from "../../constants/URLS"
import { Role } from "../../models"
import { http } from "./http"

export const findOneRoleById = async (id: string, token: string) => {
    return await http.get<Role>(`${FIND_ONE_ROLE_BY_ID}/${id}`, {token});
}