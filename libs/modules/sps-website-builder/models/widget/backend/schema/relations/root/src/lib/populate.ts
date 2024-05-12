import { populate as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { populate as navbars } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars";
import { populate as heroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-hero-section-blocks";
import { populate as pages } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages";
export const populate = {
  ...navbarBlocks,
  ...navbars,
  ...heroSectionBlocks,
  ...pages,
};
