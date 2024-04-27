import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    return c.json({
      data: "page",
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});
