import { relation as pagesToWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-pages-to-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-host-models-widget-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...pagesToWidgets(helpers),
  };
});
