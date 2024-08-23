import { MiddlewareHandler } from "hono";
import { createMiddleware } from "hono/factory";

export type IGeneric = {
  Variables: {
    parsedBody?: {
      data?: {
        [key: string]: any;
      };
      files?: {
        [key: string]: File;
      };
    };
    parsedJson?: any;
  };
};

/**
 * @deprecated
 * Not working yet, parseBody is now available only on handler
 * 
 * TypeError: Response body object should not be disturbed or locked
    at extractBody (node:internal/deps/undici/undici:6384:17)
    at new Request (node:internal/deps/undici/undici:7264:48)
    at eval (webpack-internal:///(rsc)/./node_modules/hono/dist/hono-base.js:159:16)
    at handler (webpack-internal:///(rsc)/./node_modules/hono/dist
 */
export class Middleware {
  constructor() {}

  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      if (c.req.method === "GET") {
        return next();
      }

      const contentType = c.req.header("Content-Type");

      if (!contentType) {
        return next();
      }

      if (contentType.includes("multipart/form-data")) {
        const body = await c.req.parseBody();

        const parsedBody: IGeneric["Variables"]["parsedBody"] = {};

        Object.keys(body).forEach((key) => {
          if (body[key] instanceof File) {
            const file = body[key] as File;

            if (!parsedBody.files) {
              parsedBody.files = {};
            }

            parsedBody.files = {
              ...parsedBody.files,
              [key]: file,
            };
          }
        });

        if (body?.["data"]) {
          if (typeof body["data"] === "string") {
            parsedBody.data = JSON.parse(body["data"]);
          }
        }

        c.set("parsedBody", parsedBody);

        return next();
      }

      const json = await c.req.json();

      if (json) {
        c.set("parsedJson", json);
      }

      return next();
    }).bind(this);
  }
}
