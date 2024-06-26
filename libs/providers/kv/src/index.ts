import { middleware as httpCache } from "./lib/middlewares/http-cache";
export { setRoutes } from "./lib/routes";

export { Store } from "./lib/store";

export const middlewares = {
  httpCache,
};
