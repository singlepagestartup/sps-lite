import { createMiddleware } from "hono/factory";
import { Provider as StoreProvider } from "@sps/providers-kv";
import { KV_PROVIDER, KV_TTL } from "@sps/shared-utils";
import { MiddlewareHandler } from "hono";

export type IMiddlewareGeneric = {
  Variables: undefined;
};

export class Middleware {
  storeProvider: typeof KV_PROVIDER;

  constructor() {
    this.storeProvider = KV_PROVIDER;
  }

  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      const params = c.req.url.split("?")?.[1] || "";
      const path = c.req.url.split("?")?.[0];

      const method = c.req.method;
      const cacheControl = c.req.header("Cache-Control");

      if (path.includes("rbac")) {
        return await next();
      }

      if (method === "GET" && cacheControl !== "no-cache") {
        const cachedValue = await new StoreProvider({
          type: this.storeProvider,
          prefix: path,
        }).get({
          key: params,
        });

        if (cachedValue) {
          const response = new Response(cachedValue, {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          });

          return response;
        }
      }

      await next();

      if (c.res.status >= 200 && c.res.status < 300) {
        if (method === "GET") {
          const resJson = await c.res.clone().json();

          await new StoreProvider({
            type: this.storeProvider,
            prefix: path,
          }).set({
            key: params,
            value: JSON.stringify(resJson),
            options: { ttl: KV_TTL },
          });
        }
        if (["POST", "PUT", "PATCH"].includes(method)) {
          await new StoreProvider({
            type: this.storeProvider,
            prefix: path,
          }).delByPrefix();

          const UUIDRegex = new RegExp(
            /([a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12})/,
          );
          const lastItem = path.split("/").pop();

          if (lastItem && UUIDRegex.test(lastItem)) {
            await new StoreProvider({
              type: this.storeProvider,
              prefix: path.split("/").slice(0, -1).join("/"),
            }).delByPrefix();
          }
        }
      }

      return;
    });
  }
}
