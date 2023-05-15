import { useEffect } from "react";
import { DashboardNav } from "../components/DashboardNav"
import { useSelector } from "react-redux";
import { ReduxSelector } from "../providers/reduxStore";
import { useNavigate } from "react-router-dom";
import { PersonReduxState } from "../providers/slices/personSlice";
import '../styles/dashboard.css';

export const Dashboard = () => {
    const { person, token } = useSelector<ReduxSelector, PersonReduxState>(({ personState }) => personState);
    const { id } = person;
    const navigate = useNavigate();
    useEffect(() => {
        if (!id) {
            navigate('/login')
            return;
        }
    }, []);
    return (
        <div>
            <DashboardNav />
            <div className="page">
                <article className="content">

                </article>
            </div>
        </div>
    )
}