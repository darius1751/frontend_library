import { useSelector } from "react-redux"
import { ReduxSelector } from "../providers/reduxStore";
export const DashboardNav = () => {
    const name = useSelector<ReduxSelector,string>(({ personState }) => personState.person.name);
    return (
        <nav className="dashboard-nav">
            {name}
        </nav>
    )
}