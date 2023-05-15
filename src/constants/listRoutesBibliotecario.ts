import { ListRoute } from "../models/listRoute";
import { DASHBOARD_BASE_URL } from "./dashboardBaseURL";
import { TypeLink } from "./TypeLink";


export const listRoutesBibliotecario: ListRoute[] = [
    { 
        text:'Libros',
        type:TypeLink.LIST,
        subRoutes:[
            {
                text: 'Ver',
                to:'/books',
                
            },
            {
                text: 'Crear',
                to:`${DASHBOARD_BASE_URL}/create-book`,
                
            },
            {
                text: 'Actualizar',
                to:`${DASHBOARD_BASE_URL}/update-book`,
            }                  
        ]
    },
    {
        text:'Autores',
        type: TypeLink.LIST,
        subRoutes:[
            {
                text: 'Ver',
                to:`${DASHBOARD_BASE_URL}/authors`
            },
            {
                text: 'Crear',
                to:`${DASHBOARD_BASE_URL}/create-author`
            },
            {
                text: 'Actualizar',
                to:`${DASHBOARD_BASE_URL}/update-author`
            }
        ]
    },
    {
        text:'Categorias',
        type: TypeLink.LIST,
        subRoutes:[
            {
                text: 'Ver',
                to:`${DASHBOARD_BASE_URL}/categories`
            },
            {
                text: 'Crear',
                to:`${DASHBOARD_BASE_URL}/create-category`
            },
            {
                text: 'Actualizar',
                to:`${DASHBOARD_BASE_URL}/update-category`
            }
        ]
    }
];