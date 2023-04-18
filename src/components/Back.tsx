import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export const Back = () => {
    return (
        <NavLink to={'/'} className='back'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </NavLink>
    )
}