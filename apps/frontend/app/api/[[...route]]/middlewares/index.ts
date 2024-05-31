import { middleware as isAuthenticatedMiddleware } from "./is-authentificated";

export const middlewares = {
  isAuthenticated: isAuthenticatedMiddleware,
};
