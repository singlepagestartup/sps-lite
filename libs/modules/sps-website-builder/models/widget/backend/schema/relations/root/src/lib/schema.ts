import { relation as footerBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footer-blocks";
import { relation as footers } from "@sps/sps-website-builder-models-widget-backend-schema-relations-footers";
import { relation as navbarBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbar-blocks";
import { relation as navbars } from "@sps/sps-website-builder-models-widget-backend-schema-relations-navbars";
import { relation as heroSectionBlocks } from "@sps/sps-website-builder-models-widget-backend-schema-relations-hero-section-blocks";
import { relation as pages } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...footerBlocks(helpers),
    ...footers(helpers),
    ...navbarBlocks(helpers),
    ...navbars(helpers),
    ...heroSectionBlocks(helpers),
    ...pages(helpers),
  };
});
