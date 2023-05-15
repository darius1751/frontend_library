import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ReduxSelector } from "../providers/reduxStore"
import { PersonReduxState } from "../providers/slices/personSlice";

export const useGuard = (...roles:string[]) => {
    const { person } = useSelector<ReduxSelector, PersonReduxState>(({personState}) => personState);
    const navigate = useNavigate();
    useEffect(() => {
        if(!person.role.name)
            navigate('/login');
        if(!roles.includes(person.role.name))
            navigate('/dashboard');
    },[]);
}