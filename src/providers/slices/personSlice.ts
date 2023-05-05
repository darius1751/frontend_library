import { createSlice } from "@reduxjs/toolkit"
import { Person } from "../../models";
export type PersonReduxSelector = {
    token: string, 
    person: Person
}
const initialPersonSlice: PersonReduxSelector = {
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
        login(state, {payload}: { payload: PersonReduxSelector }){
            state.person = payload.person;
            state.token = payload.token;
        }
    }
});
export const { login } = personSlice.actions;
export default personSlice.reducer;