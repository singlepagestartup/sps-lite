import { Hono } from "hono";
import { BlankSchema } from "hono/types";
import { MiddlewaresGeneric, middlewares } from "@sps/shared-backend-api";
import { logger } from "hono/logger";
import { middlewares as kvMiddlewares } from "@sps/sps-kv-provider";

export function chain(app: Hono<MiddlewaresGeneric, BlankSchema, "/">) {
  app.use(middlewares.parseQuery());
  app.use(middlewares.logger());
  app.use(middlewares.parseBody());
  app.use(kvMiddlewares.cahceMiddleware());

  if (process.env["MIDDLEWARE_LOGGER"]) {
    app.use(logger());
  }

  return app;
}
