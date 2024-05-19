import { relation as widgetsToStartupModuleWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-startup-module-widgets";
import { relation as widgetsToModules } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-modules";
import { relation as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-features-section-blocks";
import { relation as widgetsToSliderBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-slider-blocks";
import { relation as widgetsToFooterBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-footer-blocks";
import { relation as footersToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footers-to-widgets";
import { relation as widgetsToNavbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-navbar-blocks";
import { relation as navbarsToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars-to-widgets";
import { relation as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-widgets-to-hero-section-blocks";
import { relation as pagesToWidgets } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages-to-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...widgetsToStartupModuleWidgets(helpers),
    ...widgetsToModules(helpers),
    ...widgetsToFeaturesSectionBlocks(helpers),
    ...widgetsToSliderBlocks(helpers),
    ...widgetsToFooterBlocks(helpers),
    ...footersToWidgets(helpers),
    ...widgetsToNavbarBlocks(helpers),
    ...navbarsToWidgets(helpers),
    ...widgetsToHeroSectionBlocks(helpers),
    ...pagesToWidgets(helpers),
  };
});
