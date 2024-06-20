import { relation as footersToWidgets } from "@sps/sps-website-builder/models/footer/backend/schema/relations/footers-to-widgets";
import { relation as layoutsToFooters } from "@sps/sps-website-builder/models/footer/backend/schema/relations/layouts-to-footers";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder/models/footer/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...footersToWidgets(helpers), ...layoutsToFooters(helpers) };
});
