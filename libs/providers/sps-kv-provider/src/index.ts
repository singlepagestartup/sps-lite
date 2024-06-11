import { middleware as cahceMiddleware } from "./lib/middleware";
export { setRoutes } from "./lib/routes";

export const middlewares = {
  cahceMiddleware: cahceMiddleware,
};
