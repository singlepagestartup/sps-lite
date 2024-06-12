import { Hono } from "hono";
import { handlers } from "./handlers/index";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

export const app = new Hono<MiddlewaresGeneric>();

app.get("/", async (c, next) => {
  return handlers.find(c, next);
});

app.get("/check", async (c, next) => {
  const secretKey = c.req.header("X-SPS-RBAC-SECRET-KEY");

  if (!secretKey || secretKey !== process.env["SPS_RBAC_SECRET_KEY"]) {
    return c.json(
      {
        message: "No permission to access this resource.",
      },
      {
        status: 400,
      },
    );
  }

  return c.json(
    {
      message: "Permission granted.",
    },
    {
      status: 200,
    },
  );
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
