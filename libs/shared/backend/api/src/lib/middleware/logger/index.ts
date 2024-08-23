import { MiddlewareHandler } from "hono";
import { createMiddleware } from "hono/factory";
import { logger } from "hono/logger";

export type IMiddlewareGeneric = {
  Variables: {
    log: (...params: string[]) => void;
  };
};

export class Middleware {
  constructor() {}

  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      logger();

      return next();
    });
  }
}
