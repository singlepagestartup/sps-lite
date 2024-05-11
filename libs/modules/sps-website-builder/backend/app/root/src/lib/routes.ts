import { app as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-backend-app";
import { app as heroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-app";
import { app as pagesToWidgets } from "@sps/sps-website-builder-relations-pages-to-widgets-backend-app";
import { app as widget } from "@sps/sps-website-builder-models-widget-backend-app";
import { app as pagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-backend-app";
import { app as layout } from "@sps/sps-website-builder-models-layout-backend-app";
import { app as pages } from "@sps/sps-website-builder-models-page-backend-app";

export const routes = {
  "/widgets-to-hero-section-blocks": widgetsToHeroSectionBlocks,
  "/hero-section-blocks": heroSectionBlock,
  "/pages-to-widgets": pagesToWidgets,
  "/widgets": widget,
  "/pages-to-layouts": pagesToLayouts,
  "/layouts": layout,
  "/pages": pages,
};
