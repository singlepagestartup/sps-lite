import { MiddlewareHandler } from "hono";
import { createMiddleware } from "hono/factory";

export type IMiddlewareGeneric = {
  Variables: {
    log: (...params: string[]) => void;
  };
};

export class Middleware {
  constructor() {}
  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      c.set("log", (...messages: string[]) => {
        console.log("Logger middleware", ...messages);
      });

      return next();
    });
  }
}
