import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { routes } from "./routes";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const app = new Hono<MiddlewaresGeneric | MiddlewaresGeneric>();

app.get("/", async (c) => {
  try {
    return c.json({
      data: "sps-rbac",
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});

for (const route in routes) {
  // @ts-ignore
  app.route(route, routes[route as keyof typeof routes]);
}
