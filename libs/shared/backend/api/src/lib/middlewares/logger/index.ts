import { createMiddleware } from "hono/factory";

export type MiddlewareGeneric = {
  Variables: {
    log: (...params: string[]) => void;
  };
};

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    c.set("log", (...messages: string[]) => {
      console.log("Logger middleware", ...messages);
    });

    return next();
  });
}
