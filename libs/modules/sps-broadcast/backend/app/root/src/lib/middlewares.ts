import { Hono } from "hono";
import { BlankSchema } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

export function middlewaresChain(
  app: Hono<MiddlewaresGeneric, BlankSchema, "/">,
) {
  return app;
}
