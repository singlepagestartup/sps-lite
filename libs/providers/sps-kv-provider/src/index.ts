import { middleware as httpCache } from "./lib/middlewares/http-cache";
import { middleware as session } from "./lib/middlewares/session";
export { setRoutes } from "./lib/routes";

export const middlewares = {
  httpCache,
  session,
};
