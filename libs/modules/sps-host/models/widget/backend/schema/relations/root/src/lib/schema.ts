import { relation as layoutsToWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-layouts-to-widgets";
import { relation as widgetsToExternalModules } from "@sps/sps-host-models-widget-backend-schema-relations-widgets-to-external-modules";
import { relation as pagesToWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-pages-to-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-host-models-widget-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...layoutsToWidgets(helpers),
    ...widgetsToExternalModules(helpers),
    ...pagesToWidgets(helpers),
  };
});
