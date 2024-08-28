import { RBAC_SECRET_KEY } from "@sps/shared-utils";
import { MiddlewareHandler } from "hono";
import { createMiddleware } from "hono/factory";
import { api as channelApi } from "@sps/broadcast/models/channel/sdk/server";
import { revalidateTag } from "next/cache";

export type IMiddlewareGeneric = unknown;

export class Middleware {
  constructor() {}

  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      const path = c.req.path;
      const method = c.req.method;

      await next();

      if (path.includes("/api/broadcast")) {
        return;
      }

      try {
        if (c.res.status >= 200 && c.res.status < 300) {
          if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
            if (!RBAC_SECRET_KEY) {
              throw Error(
                "RBAC_SECRET_KEY is not defined, broadcast middleware 'revalidation' can't request to service.",
              );
            }

            if (["POST", "PUT", "PATCH"].includes(method)) {
              await channelApi.pushMessage({
                data: { channelName: "revalidation", payload: path },
                options: {
                  headers: {
                    "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                  },
                  next: {
                    cache: "no-store",
                  },
                },
              });
              revalidateTag(path);
            }
            if (["DELETE"].includes(method)) {
              const pathWithoutId = path.replace(/\/[a-zA-Z0-9-]+$/, "");

              await channelApi.pushMessage({
                data: { channelName: "revalidation", payload: pathWithoutId },
                options: {
                  headers: {
                    "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                  },
                  next: {
                    cache: "no-store",
                  },
                },
              });
              revalidateTag(pathWithoutId);
            }
          }
        }
      } catch (error: any) {
        console.error(`revalidation`, error.message, error.stack);
      }
    });
  }
}
