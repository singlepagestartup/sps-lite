import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";
import { MiddlewareHandler } from "hono";
import { api as authenticationApi } from "@sps/sps-rbac/models/authentication/sdk/server";
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
    regexPath: /\/api\/sps-rbac\/authentications\/is-authorized/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-broadcast\/(channels|messages)/,
    methods: ["GET"],
  },
  {
    regexPath:
      /\/api\/sps-rbac\/authentications\/(authentication|registration)\/(\w+)?/,
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
    regexPath: /\/api\/sps-rbac\/[a-zA-Z0-9-]+-blocks\/?/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-rbac\/subjects\/me/,
    methods: ["GET"],
  },
  {
    regexPath: /\/api\/sps-third-parties\/telegrams\/[a-zA-Z0-9-]+\/webhook/,
    methods: ["POST"],
  },
  {
    regexPath: /\/api\/(sps-host|sps-website-builder|sps-file-storage)\/.*/,
    methods: ["GET"],
  },
];

export class Middleware {
  constructor() {}

  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      const reqMethod = c.req.method;
      const reqPath = c.req.path;
      const secretKeyHeaders = c.req.header("X-SPS-RBAC-SECRET-KEY");
      const secretKeyCookie = getCookie(c, "sps-rbac.secret-key");
      const secretKey = secretKeyHeaders || secretKeyCookie;
      const authorizationCookie = getCookie(c, "sps-rbac.authentication.jwt");
      const authorizationHeader = c.req.header("Authorization");
      const authorization =
        authorizationCookie || authorizationHeader?.replace("Bearer ", "");

      if (reqPath.includes("/api/sps-rbac/sessions") && reqMethod === "POST") {
        if (!secretKey || secretKey !== SPS_RBAC_SECRET_KEY) {
          throw new HTTPException(401, {
            message: "Unauthorized",
          });
        }

        return next();
      }

      const matchedRoute = allowedRoutes.find((route) => {
        return route.regexPath.test(reqPath);
      });

      if (matchedRoute && matchedRoute.methods.includes(reqMethod)) {
        return next();
      }

      try {
        const headers = secretKey
          ? { "X-SPS-RBAC-SECRET-KEY": secretKey }
          : authorization
            ? { Authorization: authorization }
            : ({} as HeadersInit);

        const isAuthorized = await authenticationApi.isAuthorized({
          params: {
            action: {
              route: reqPath.toLowerCase(),
              method: reqMethod.toUpperCase(),
              type: "HTTP",
            },
          },
          options: {
            headers,
            next: {
              cache: "no-store",
            },
          },
        });
      } catch (error: any) {
        throw new HTTPException(401, {
          message: error["message"],
        });
      }

      return next();
    });
  }
}
