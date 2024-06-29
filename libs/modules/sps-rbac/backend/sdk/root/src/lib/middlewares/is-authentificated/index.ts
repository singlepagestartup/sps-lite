import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { MiddlewareGeneric } from "../session";
import { BACKEND_URL } from "@sps/shared-utils";
import { getCookie } from "hono/cookie";

/**
 * Routes that are allowed to be accessed without authentication
 * @type {Array<{ regexPath: RegExp; methods: string[] }>}
 *
 * [..., {
 *   regexPath: /\/api\/sps-rbac\/identities\/[a-zA-Z0-9-]+/,
 *   methods: ["GET"],
 * }]
 */
const allowedRoutes: { regexPath: RegExp; methods: string[] }[] = [
  {
    regexPath: /\/api\/sps-rbac\/authentications\/is-authenticatated/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-rbac\/authentications\/providers\/(\w+)?/,
    methods: ["POST"],
  },
  {
    regexPath: /\/api\/sps-rbac\/sessions\/init/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-rbac\/authentications\/logout/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-rbac\/widgets\/?/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-rbac\/authentication-blocks\/?/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-third-parties\/telegrams\/[a-zA-Z0-9-]+\/webhook/,
    methods: ["POST"],
  },
  {
    regexPath:
      /\/api\/(sps-host|sps-website-builder|startup|sps-file-storage)\/.*/,
    methods: ["GET"],
  },
];

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const reqMethod = c.req.method;
    const reqPath = c.req.path;
    const secretKey = c.req.header("X-SPS-RBAC-SECRET-KEY");

    const matchedRoute = allowedRoutes.find((route) => {
      return route.regexPath.test(reqPath);
    });

    if (matchedRoute && matchedRoute.methods.includes(reqMethod)) {
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
          console.log(
            `🚀 ~ returncreateMiddleware<MiddlewareGeneric> ~ reqPath:`,
            reqPath,
          );

          throw new HTTPException(401, {
            message: "Unauthorized",
          });
        }

        return next();
      })
      .catch((error) => {
        console.log(
          `🚀 ~ returncreateMiddleware<MiddlewareGeneric> ~ reqPath:`,
          reqPath,
        );

        throw new HTTPException(401, {
          message: "Unauthorized",
        });
      });
  });
}
