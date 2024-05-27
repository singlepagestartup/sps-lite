import { createMiddleware } from "hono/factory";

export type MiddlewareGeneric = {
  Variables: {
    log: () => void;
  };
};

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    c.set("log", () => {
      console.log(`🚀 ~ logger middleware`);
    });

    return next();
  });
}
