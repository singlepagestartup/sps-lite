import { relation as featuresSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-features-section-blocks";
import { relation as sliderBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-slider-blocks";
import { relation as widgetsToFooterBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-footer-blocks";
import { relation as footersToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footers-to-widgets";
import { relation as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { relation as navbarsToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars-to-widgets";
import { relation as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-hero-section-blocks";
import { relation as pagesToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages-to-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...featuresSectionBlocks(helpers),
    ...sliderBlocks(helpers),
    ...widgetsToFooterBlocks(helpers),
    ...footersToWidgets(helpers),
    ...navbarBlocks(helpers),
    ...navbarsToWidgets(helpers),
    ...widgetsToHeroSectionBlocks(helpers),
    ...pagesToWidgets(helpers),
  };
});
