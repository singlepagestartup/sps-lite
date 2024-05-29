import { createMiddleware } from "hono/factory";

export type MiddlewareGeneric = {
  Variables: {
    parsedBody: {
      data?: {
        [key: string]: any;
      };
      files?: {
        [key: string]: File;
      };
    };
  };
};

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const body = await c.req.parseBody();

    const parsedBody: MiddlewareGeneric["Variables"]["parsedBody"] = {};

    Object.keys(body).forEach((key) => {
      if (body[key] instanceof File) {
        const file = body[key] as File;
        console.log(`🚀 ~ Object.keys ~ file:`, file);

        if (!parsedBody.files) {
          parsedBody.files = {};
        }

        parsedBody.files = {
          ...parsedBody.files,
          [key]: file,
        };
      }
    });

    if (body["data"]) {
      if (typeof body["data"] === "string") {
        parsedBody.data = JSON.parse(body["data"]);
      }
    }

    c.set("parsedBody", parsedBody);

    return next();
  });
}
