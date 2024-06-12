import { middleware as isAuthenticated } from "./is-authentificated";
import { middleware as session } from "./session";

export const middlewares = {
  isAuthenticated,
  session,
};
