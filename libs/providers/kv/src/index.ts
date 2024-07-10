import { middleware as httpCache } from "./lib/middlewares/http-cache";
export { setRoutes } from "./lib/routes";

export const middlewares = {
  httpCache,
};
