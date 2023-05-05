import { useEffect } from "react";
import { DashboardNav } from "../components/DashboardNav"
import { useSelector } from "react-redux";
import { ReduxSelector } from "../providers/reduxStore";
import { useNavigate } from "react-router-dom";
import { findOneRoleById } from "../helpers/findOneRoleById";
import { PersonReduxSelector } from "../providers/slices/personSlice";
import '../styles/dashboard.css';

export const Dashboard =  () => {
    const { person, token} = useSelector<ReduxSelector, PersonReduxSelector>(({personState}) =>personState);
    const { id, role} = person;
    const navigate = useNavigate();
    useEffect(()=> {
        ( async () => {
            if(!id)
                navigate('/login')
            const roleUser = await findOneRoleById(role.id, token);
            console.log({roleUser});
        })();
        
    },[]);
    return (
        <div>
            <DashboardNav/>
            <div className="page">
            <article className="content">
                
            </article>
            </div>
        </div>
    )
}