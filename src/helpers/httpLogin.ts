import { LOGIN } from "../constants/URLS";
import { Credential } from "../models";
import { PersonReduxSelector } from "../providers/slices/personSlice";
import { http } from "./http/http";

export const httpLogin = async (credential:Credential) => {
    return await http.post<PersonReduxSelector, Credential>(LOGIN, credential);
}