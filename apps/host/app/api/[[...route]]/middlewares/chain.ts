import { logger } from "hono/logger";
import {
  IsAllowedMiddleware,
  ParseQueryMiddleware,
  LoggerMiddleware,
  RevalidationMiddleware,
} from "@sps/middlewares";
import { MIDDLEWARE_HTTP_CACHE, MIDDLEWARE_LOGGER } from "@sps/shared-utils";

export function chain(app: any) {
  app.use(new RevalidationMiddleware().init());
  app.use(new ParseQueryMiddleware().init());
  app.use(new LoggerMiddleware().init());
  // app.use(new IsAllowedMiddleware().init());

  // if (MIDDLEWARE_HTTP_CACHE) {
  //   app.use(middlewares.httpCache());
  // }

  // if (MIDDLEWARE_LOGGER) {
  //   app.use(logger());
  // }

  return app;
}
