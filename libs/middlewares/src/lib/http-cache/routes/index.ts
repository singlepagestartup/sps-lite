import { Hono } from "hono";
import { Provider as StoreProvider } from "@sps/providers-kv";
import { KV_PROVIDER } from "@sps/shared-utils";

export function setRoutes<T extends Hono>(app: T) {
  app.get("/http-cache/clear", async (c) => {
    await new StoreProvider({
      type: KV_PROVIDER,
    }).flushall();

    return c.json({ message: "Cache cleared" });
  });
}
