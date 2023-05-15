import { ListRoute } from "../models/listRoute";
import { DASHBOARD_BASE_URL } from "./dashboardBaseURL";
import { listRoutesBibliotecario } from "./listRoutesBibliotecario";
import { TypeLink } from "./TypeLink";


export const listRoutesAdministrator: ListRoute[] = [
    {
        text:'Usuarios',
        type:TypeLink.LIST,
        subRoutes:[
            {
                text:'Ver',
                to: `${DASHBOARD_BASE_URL}/users`
            },
            {
                text:'Crear',
                to: `${DASHBOARD_BASE_URL}/create-user`
            },
            {
                text:'Actualizar',
                to: `${DASHBOARD_BASE_URL}/update-user`
            }
        ],
    },
    ...listRoutesBibliotecario
]