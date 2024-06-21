import { createMiddleware } from "hono/factory";
import { store } from "../../store";

export type MiddlewareGeneric = {
  Variables: {
    setCached: (key: string, value: string) => void;
    getCached: (key: string) => string | null;
  };
};

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const path = c.req.url;
    const method = c.req.method;

    if (path.includes("sps-rbac")) {
      return await next();
    }

    if (method === "GET" && store) {
      const cachedValue = await store.find(path);

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

    if (store && c.res.status >= 200 && c.res.status < 300) {
      if (method === "GET") {
        const resJson = await c.res.clone().json();

        store.create(path, 60, JSON.stringify(resJson));
      }
      if (["POST", "PUT", "PATCH"].includes(method)) {
        store.clearByPrefix(path);
      }
    }

    return;
  });
}
