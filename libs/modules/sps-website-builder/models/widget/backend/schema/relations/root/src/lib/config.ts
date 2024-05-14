import { config as featuresSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-features-section-blocks";
import { config as sliderBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-slider-blocks";
import { config as footerBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footer-blocks";
import { config as footers } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footers";
import { config as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { config as navbars } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars";
import { config as heroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-hero-section-blocks";
import { config as pages } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages";
export const config = {
  [featuresSectionBlocks.name]: featuresSectionBlocks,
  [sliderBlocks.name]: sliderBlocks,
  [footerBlocks.name]: footerBlocks,
  [footers.name]: footers,
  [navbarBlocks.name]: navbarBlocks,
  [navbars.name]: navbars,
  [heroSectionBlocks.name]: heroSectionBlocks,
  [pages.name]: pages,
};