import { createMiddleware } from "hono/factory";

export type MiddlewareGeneric = {
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

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    if (c.req.method === "GET") {
      return next();
    }

    const contentType = c.req.header("Content-Type");
    if (!contentType) {
      return next();
    }

    if (contentType.includes("multipart/form-data")) {
      const body = await c.req.parseBody();

      const parsedBody: MiddlewareGeneric["Variables"]["parsedBody"] = {};

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
  });
}
