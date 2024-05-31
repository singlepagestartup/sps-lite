import { createMiddleware } from "hono/factory";

export function middleware() {
  return createMiddleware(async (c, next) => {
    const secretKey = c.req.header("X-SPS-SECRET-KEY");

    console.log(
      `🚀 ~ returncreateMiddleware<any,any,any> ~ secretKey:`,
      secretKey,
    );

    if (!secretKey) {
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
