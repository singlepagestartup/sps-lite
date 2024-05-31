import { middleware as checkRoleMiddleware } from "./check-role";
import { middleware as isAuthenticatedMiddleware } from "./is-authentificated";

export const middlewares = {
  checkRole: checkRoleMiddleware,
  isAuthenticated: isAuthenticatedMiddleware,
};
