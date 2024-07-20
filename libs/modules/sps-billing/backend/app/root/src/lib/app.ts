import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { routes } from "./routes";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    return c.json({
      data: "sps-billing",
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});

for (const route in routes) {
  app.route(route, routes[route as keyof typeof routes]);
}
