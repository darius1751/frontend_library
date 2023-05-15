import { NavLink } from "react-router-dom"
import { ButtonRoute } from "../models/buttonRoute"

type PropsButtonNav = {
    route: ButtonRoute
}
export const ButtonNav = ({route}:PropsButtonNav) => {
    const { text } = route;
    return (
        <NavLink to={(route as ButtonRoute).to} className={'dashboard-nav-item'}>{text}</NavLink>
    )
}