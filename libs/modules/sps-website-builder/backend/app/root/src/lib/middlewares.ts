import { Hono } from "hono";
import { BlankSchema } from "hono/types";
import { MiddlewaresGeneric, middlewares } from "@sps/shared-backend-api";

export function middlewaresChain(
  app: Hono<MiddlewaresGeneric, BlankSchema, "/">,
) {
  app.use(middlewares.parseQuery());
  app.use(middlewares.logger());

  return app;
}
