import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { ListRoute } from "../models/listRoute"

type PropsNavList = {
    route: ListRoute
}
export const NavList = ({ route }: PropsNavList) => {
    const { text, subRoutes } = route;
    const [open, setOpen] = useState(false);
    const handleClick = (e: MouseEvent<HTMLElement>) => {
        setOpen(!open);
    }
    return (
        <article className="dashboard-nav-item" onClick={handleClick}>
            <label>{text} <FontAwesomeIcon icon={faCaretDown}/></label>
            <section className={`dashboard-nav-list ${open ? 'visible' : 'hidden'}`} >
                {
                    subRoutes.map(({ text: title, to }, index) =>
                        <section className="dashboard-nav-item" key={`${index + to}`}>
                            <NavLink to={to}>{title}</NavLink>
                        </section>
                    )
                }
            </section>
        </article>
    )
}