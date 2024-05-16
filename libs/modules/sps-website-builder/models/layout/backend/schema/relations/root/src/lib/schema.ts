import { relation as layoutsToNavbars } from "@sps/sps-website-builder-models-layout-backend-schema-relations-layouts-to-navbars";
import { relation as layoutsToFooters } from "@sps/sps-website-builder-models-layout-backend-schema-relations-layouts-to-footers";
import { relation as pagesToLayouts } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages-to-layouts";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-layout-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...layoutsToNavbars(helpers),
    ...layoutsToFooters(helpers),
    ...pagesToLayouts(helpers),
  };
});
