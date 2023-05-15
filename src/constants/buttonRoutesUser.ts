import { ButtonRoute } from "../models/buttonRoute";
import { DASHBOARD_BASE_URL } from "./dashboardBaseURL";
import { TypeLink } from "./TypeLink";

export const buttonRoutesUser:ButtonRoute[] = [
    { 
        to:`/books`,
        text:'Ver libros',
        type:TypeLink.BUTTON
    },
    {
        to:`${DASHBOARD_BASE_URL}/create-reservation`,
        text:'Realizar Reservacion',
        type: TypeLink.BUTTON,
    },
    {
        to:`${DASHBOARD_BASE_URL}/create-renewal`,
        text:'Realizar Renovacion',
        type: TypeLink.BUTTON,
    }
];