import { createMiddleware } from "hono/factory";

export function middleware() {
  return createMiddleware(async (c, next) => {});
}
