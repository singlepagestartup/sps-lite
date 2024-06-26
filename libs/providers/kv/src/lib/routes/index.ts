import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { Store } from "../store";

export function setRoutes<T extends Hono>(app: T) {
  app.get("/cache/clear", async (c) => {
    const store = new Store();

    if (!store) {
      throw new HTTPException(500, {
        message: "Cache store not initialized",
      });
    }

    await store.RedisClient.flushall();

    return c.json({ message: "Cache cleared" });
  });
}
