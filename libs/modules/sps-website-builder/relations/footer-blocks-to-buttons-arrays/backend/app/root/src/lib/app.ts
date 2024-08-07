import { Hono } from "hono";
import { handlers } from "./handlers/index";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const app = new Hono<MiddlewaresGeneric>();

app.get("/", async (c, next) => {
  return handlers.find(c, next);
});

app.get("/:uuid", async (c, next) => {
  return handlers.findById(c, next);
});

app.post("/", async (c, next) => {
  return handlers.create(c, next);
});

app.patch("/:uuid", async (c, next) => {
  return handlers.update(c, next);
});

app.delete("/:uuid", async (c, next) => {
  return handlers.delete(c, next);
});
