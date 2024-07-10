import { Hono } from "hono";
import { Provider as StoreProvider } from "../provider";
import { KV_PROVIDER } from "@sps/shared-utils";

export function setRoutes<T extends Hono>(app: T) {
  app.get("/cache/clear", async (c) => {
    await new StoreProvider({
      type: KV_PROVIDER,
    }).flushall();

    return c.json({ message: "Cache cleared" });
  });
}
