import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { MiddlewareGeneric } from "../session";
import { BACKEND_URL } from "@sps/shared-utils";
import { getCookie } from "hono/cookie";

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const method = c.req.method;
    const url = c.req.url;
    const secretKey = c.req.header("X-SPS-RBAC-SECRET-KEY");

    if (["GET"].includes(method) || url.includes("/authentications")) {
      return next();
    }

    const cookies = getCookie(c);
    const cookiesString = Object.keys(cookies)
      .map((key) => `${key}=${cookies[key]}`)
      .join("; ");

    const check = await fetch(
      BACKEND_URL + "/api/sps-rbac/authentications/is-authenticatated",
      {
        method: "GET",
        headers: {
          Cookie: cookiesString,
          ...(secretKey ? { "X-SPS-RBAC-SECRET-KEY": secretKey } : {}),
        },
      },
    );

    await check
      .json()
      .then((data) => {
        if (!data) {
          throw new HTTPException(401, {
            message: "Unauthorized",
          });
        }

        return next();
      })
      .catch((error) => {
        throw new HTTPException(401, {
          message: "Unauthorized",
        });
      });
  });
}
