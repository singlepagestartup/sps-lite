import { Hono } from "hono";
import { BlankSchema } from "hono/types";
import { MiddlewaresGeneric, middlewares } from "@sps/shared-backend-api";
import { logger } from "hono/logger";

export function middlewaresChain(
  app: Hono<MiddlewaresGeneric, BlankSchema, "/">,
) {
  app.use(middlewares.parseQuery());
  app.use(middlewares.logger());
  app.use(middlewares.parseBody());

  if (process.env["MIDDLEWARE_LOGGER"]) {
    app.use(logger());
  }

  return app;
}
