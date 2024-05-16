import { populate as featuresSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-features-section-blocks";
import { populate as sliderBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-slider-blocks";
import { populate as widgetsToFooterBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-footer-blocks";
import { populate as footersToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footers-to-widgets";
import { populate as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { populate as navbarsToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars-to-widgets";
import { populate as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-hero-section-blocks";
import { populate as pagesToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages-to-widgets";

export const populate = {
  ...featuresSectionBlocks,
  ...sliderBlocks,
  ...widgetsToFooterBlocks,
  ...footersToWidgets,
  ...navbarBlocks,
  ...navbarsToWidgets,
  ...widgetsToHeroSectionBlocks,
  ...pagesToWidgets,
} as const;
