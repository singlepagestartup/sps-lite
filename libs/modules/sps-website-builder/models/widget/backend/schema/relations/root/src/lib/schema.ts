import { relation as pages } from "@sps/sps-website-builder-models-widget-backend-schema-relations-pages";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...pages(helpers) };
});
