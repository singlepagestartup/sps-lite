import { Hono } from "hono";
import { handlers } from "./handlers/index";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { SessionMiddlewareGeneric } from "@sps/sps-rbac/backend/sdk/root";

export const app = new Hono<MiddlewaresGeneric & SessionMiddlewareGeneric>();

app.get("/", async (c, next) => {
  return handlers.find(c, next);
});

app.get("/is-authenticatated", async (c, next) => {
  return handlers.isAuthenticatated(c, next);
});

app.post("/logout", async (c, next) => {
  return handlers.logout(c, next);
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

app.post("/providers/:provider", async (c, next) => {
  return handlers.providers(c, next);
});
