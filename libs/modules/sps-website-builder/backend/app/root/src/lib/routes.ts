import { app as pagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-backend-app";
import { app as layout } from "@sps/sps-website-builder-models-layout-backend-app";
import { app as pages } from "@sps/sps-website-builder-models-page-backend-app";

export const routes = {
  "/pages-to-layouts": pagesToLayouts,
  "/layouts": layout,
  "/pages": pages,
};
