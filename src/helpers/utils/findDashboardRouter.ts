import { dashboardConfig } from "../../constants/DashboardConfig";
import { Role } from "../../models";

export const findDashboardRouter = (roleUser: Role) => {
    return dashboardConfig.find(({role})=> role === roleUser.name);
}