import { Hono } from "hono";
import { handlers } from "./handlers/index";

import { chain as middlewaresChain } from "./middlewares/chain";

export const app = new Hono();

middlewaresChain(app);

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
