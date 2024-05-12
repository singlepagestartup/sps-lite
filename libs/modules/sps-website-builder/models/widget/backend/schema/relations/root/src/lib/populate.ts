import { populate as sliderBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-slider-blocks";
import { populate as footerBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footer-blocks";
import { populate as footers } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footers";
import { populate as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { populate as navbars } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars";
import { populate as heroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-hero-section-blocks";
import { populate as pages } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages";
export const populate = {
  ...sliderBlocks,
  ...footerBlocks,
  ...footers,
  ...navbarBlocks,
  ...navbars,
  ...heroSectionBlocks,
  ...pages,
};
