import { app as slide } from "@sps/sps-website-builder-models-slide-backend-app";
import { app as pages } from "@sps/sps-website-builder-models-page-backend-app";
import { app as layouts } from "@sps/sps-website-builder-models-layout-backend-app";

export const routes = {
  "/slides": slide,
  "/pages": pages,
  "/layouts": layouts,
};
