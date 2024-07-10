import { createMiddleware } from "hono/factory";
import { Provider as StoreProvider } from "../../provider";
import { KV_PROVIDER, KV_TTL } from "@sps/shared-utils";

export type MiddlewareGeneric = {
  Variables: undefined;
};

export function middleware() {
  const storeProvider = KV_PROVIDER;

  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const path = c.req.url;
    const method = c.req.method;

    if (path.includes("sps-rbac")) {
      return await next();
    }

    if (method === "GET") {
      const cachedValue = await new StoreProvider({
        type: storeProvider,
      }).get({
        key: path,
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
          type: storeProvider,
        }).set({
          key: path,
          value: JSON.stringify(resJson),
          options: { ttl: KV_TTL },
        });
      }
      if (["POST", "PUT", "PATCH"].includes(method)) {
        await new StoreProvider({
          type: storeProvider,
        }).del({
          key: path,
        });
      }
    }

    return;
  });
}
