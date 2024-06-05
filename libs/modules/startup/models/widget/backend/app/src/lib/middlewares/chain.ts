import { Hono } from "hono";

export function chain(app: Hono<any>) {
  return app;
}
