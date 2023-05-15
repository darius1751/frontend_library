import { DashboardRoute } from "../models/dashboardRoute";
import { buttonRoutesAdministrador } from "./buttonRoutesAdministrador";
import { buttonRoutesBibliotecario } from "./buttonRoutesBibliotecario";
import { buttonRoutesUser } from "./buttonRoutesUser";
import { listRoutesAdministrator } from "./listRoutesAdministrador";
import { listRoutesBibliotecario } from "./listRoutesBibliotecario";

export const dashboardConfig: DashboardRoute[] = [
    {
        role: 'Usuario',
        routes: [
            ...buttonRoutesUser
        ]
    },
    {
        role: 'Bibliotecario',
        routes: [
            ...listRoutesBibliotecario,
            ...buttonRoutesBibliotecario
        ]
    },
    {
        role: 'Administrador',
        routes: [
            ...listRoutesAdministrator,
            ...buttonRoutesAdministrador
        ]
    }
];