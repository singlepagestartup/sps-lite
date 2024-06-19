import { relation as pagesToLayouts } from "@sps/sps-host-models-layout-backend-schema-relations-pages-to-layouts";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-host-models-layout-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...pagesToLayouts(helpers) };
});
