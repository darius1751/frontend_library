import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { ReduxSelector } from "../providers/reduxStore";
import { PersonReduxState } from "../providers/slices/personSlice";
import { findOneRoleById } from "../helpers/http/findOneRoleById";
import { DashboardNavItems } from "./DashboardNavItems";
import { Role } from "../models";
export const DashboardNav = memo(() => {
    const { token, person } = useSelector<ReduxSelector,PersonReduxState>(({ personState }) => personState);
    const [roleUser, setRoleUser] = useState<Role>({id:'-1', description:'', name:''});
    const { role } = person;
    
    useEffect(() =>{
        (
            async () => setRoleUser(await findOneRoleById(role.id, token))
        )();
    },[]);
    return ( 
        <nav className="dashboard-nav">
            <DashboardNavItems roleUser={roleUser}/>
        </nav>
    )
})