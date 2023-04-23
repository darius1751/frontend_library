import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export type PropsBack = {
    page?: string;
}
export const Back = ({page = '/'}: PropsBack) => {
    return (
        <NavLink to={page} className='back'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </NavLink>
    )
}