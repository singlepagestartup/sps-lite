import { Hono } from "hono";
import { model } from "./model";
import { apiFactories } from "@sps/shared-backend-api";

export const app = new Hono();

apiFactories.crudApiFactory({
  app,
  model,
});
