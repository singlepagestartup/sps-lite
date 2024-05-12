import { config as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { config as navbars } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars";
import { config as heroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-hero-section-blocks";
import { config as pages } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages";
export const config = {
  [navbarBlocks.name]: navbarBlocks,
  [navbars.name]: navbars,
  [heroSectionBlocks.name]: heroSectionBlocks,
  [pages.name]: pages,
};
