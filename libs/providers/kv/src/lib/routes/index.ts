import { Hono } from "hono";
import { store } from "../store";
import { HTTPException } from "hono/http-exception";

export function setRoutes<T extends Hono>(app: T) {
  app.get("/cache/clear", async (c) => {
    if (!store) {
      throw new HTTPException(500, {
        message: "Cache store not initialized",
      });
    }

    await store.RedisClient.flushall();

    return c.json({ message: "Cache cleared" });
  });
}
