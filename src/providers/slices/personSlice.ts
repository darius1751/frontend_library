import { createSlice } from "@reduxjs/toolkit"
import { Person } from "../../models";
export type PersonReduxState = {
    token: string, 
    person: Person
}
export const initialPersonSlice: PersonReduxState = {
    token:'', 
    person: {
        id:'',
        address:'',
        birthday:'',
        createdAt:'',
        documentIdentifier:'',
        email:'',
        name:'',
        personState:{
            id:'',
            description:'',
            name:''
        },
        phone:'',
        role:{
            id:'',
            description:'',
            name:''
        }
    }
}
export const personSlice = createSlice({
    name:'personState',
    initialState: initialPersonSlice,
    reducers:{
        login(state, {payload}: { payload: PersonReduxState }){
            state.person = payload.person;
            state.token = payload.token;
        },
        logout(state){
            state.person = initialPersonSlice.person;
            state.token = initialPersonSlice.token;
        }
    }
});
export const { login, logout } = personSlice.actions;
export default personSlice.reducer;