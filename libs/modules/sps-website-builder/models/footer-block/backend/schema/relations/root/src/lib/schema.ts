import { relation as widgetsToFooterBlocks } from "@sps/sps-website-builder-models-footer-block-backend-schema-relations-widgets-to-footer-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-footer-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgetsToFooterBlocks(helpers) };
});
