import { FIND_ALL_ROLES } from "../../constants/URLS"
import { Role } from "../../models";
import { http } from "./http"

export const findAllRoles = async (token: string) => {
    return await http.get<Role[]>(FIND_ALL_ROLES, {token});
}