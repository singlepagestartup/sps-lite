import { relation as navbarsToWidgets } from "@sps/sps-website-builder/models/navbar/backend/schema/relations/navbars-to-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder/models/navbar/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...navbarsToWidgets(helpers) };
});
