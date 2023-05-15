import { LOGIN } from "../../constants/URLS";
import { Credential } from "../../models";
import { PersonReduxState } from "../../providers/slices/personSlice";
import { http } from "./http";

export const httpLogin = async (credential:Credential) => {
    return await http.post<PersonReduxState, Credential>(LOGIN, credential);
}