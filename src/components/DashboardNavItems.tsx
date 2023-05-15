import { MouseEvent, useMemo } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { findDashboardRouter } from "../helpers/utils/findDashboardRouter"
import { Role } from "../models"
import { logout } from "../providers/slices/personSlice"
import { DashboardNavItem } from "./DashboardNavItem"
export type PropsDashboardNavItems = {
    roleUser: Role
}
export const DashboardNavItems = ({ roleUser }:PropsDashboardNavItems) => {
    const dashboardItems = useMemo(()=> findDashboardRouter(roleUser), [roleUser]);
    // const dashboardItems = dashboardConfig.find(({role})=> role === roleUser.name);
    const dispatch = useDispatch();
    const handleClose = (e:MouseEvent<HTMLElement>) => {
        dispatch(logout())

    }
    return (
        <article className="dashboard-nav-items">
            <NavLink to='/dashboard' className={'dashboard-nav-item'}>Logo</NavLink>
            {
                dashboardItems?.routes?.map((route, index) =><DashboardNavItem route={route} key={index}/>)
            }
            <NavLink to='/login' className={'dashboard-nav-item close-sesion'} onClick={handleClose}>Cerrar Sesion</NavLink>
            
        </article>
    )
}