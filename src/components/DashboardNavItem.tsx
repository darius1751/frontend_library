import { TypeLink } from "../constants/TypeLink"
import { ButtonRoute } from "../models/buttonRoute"
import { ListRoute } from "../models/listRoute"
import { Route } from "../models/route"
import { ButtonNav } from "./ButtonRoute"
import { NavList } from "./NavList"

export type PropsDashboardNavItems = {
    route: Route
}
export const  DashboardNavItem = ({route}:PropsDashboardNavItems) => {
    const { type } = route;
    return(
        <>
        { 
            type == TypeLink.BUTTON? <ButtonNav route={route as ButtonRoute}/> :
            <NavList route={route as ListRoute}/>
            
        }
        </>
        
    )
}