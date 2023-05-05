import { PersonState } from "./personState";
import { Role } from "./role";

export interface Person {
    id: string;
    documentIdentifier: string;
    name: string;
    phone: string;
    address: string;
    birthday: string;
    email: string;
    createdAt: string;
    personState: PersonState
    role: Role;
}


