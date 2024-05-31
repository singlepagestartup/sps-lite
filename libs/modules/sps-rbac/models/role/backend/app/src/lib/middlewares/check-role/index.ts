import { createMiddleware } from "hono/factory";

export function middleware() {
  return createMiddleware<any, any, any>(async (c, next) => {
    const method = c.req.method;
    console.log(`🚀 ~ returncreateMiddleware<any,any,any> ~ method:`, method);

    if (method !== "GET") {
      return c.json(
        {
          message: "No permission to access this resource.",
        },
        {
          status: 400,
        },
      );
    }

    return await next();
  });
}
