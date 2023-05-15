import { ButtonRoute } from "../models/buttonRoute";
import { DASHBOARD_BASE_URL } from "./dashboardBaseURL";
import { TypeLink } from "./TypeLink";


export const buttonRoutesBibliotecario: ButtonRoute[] = [
    {
        text:'Realizar Prestamo',
        to: `${DASHBOARD_BASE_URL}/create-loan`,
        type: TypeLink.BUTTON
    },
    {
        text:'Realizar Devolucion',
        to: `${DASHBOARD_BASE_URL}/create-devolution`,
        type: TypeLink.BUTTON
    },
    {
        text:'Historiales',
        to: `${DASHBOARD_BASE_URL}/history`,
        type: TypeLink.BUTTON
    }


];