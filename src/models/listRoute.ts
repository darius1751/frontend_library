import { Route } from "./route";
import { SubRoute } from "./subRoute";

export interface ListRoute extends Route{
    subRoutes: SubRoute[]
}