import { Hono } from "hono";
import { handlers } from "./handlers/index";

export const app = new Hono();

app.get("/urls", async (c, next) => {
  return handlers.urls(c, next);
});

app.get("/find-by-url", async (c, next) => {
  return handlers.findByUrl(c, next);
});

app.get("/url-segment-value", async (c, next) => {
  return handlers.urlSegmentValue(c, next);
});

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
