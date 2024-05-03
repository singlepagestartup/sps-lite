import { Hono } from "hono";
import { model } from "@sps/sps-website-builder-models-layout-backend-model";
import { apiFactories } from "@sps/shared-backend-api";

export const app = new Hono();

apiFactories.crudApiFactory({
  app,
  model,
});
