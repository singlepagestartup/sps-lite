import { Hono } from "hono";
import { BlankSchema, Env } from "hono/types";

export function middlewaresChain(app: Hono<Env, BlankSchema, "/">) {
  return app;
}
