import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  PagesToLayoutsTable,
  pagesToLayoutsName,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations";

export const Relations = relations(Table, (helpers) => {
  return {
    [pagesToLayoutsName]: helpers.many(PagesToLayoutsTable),
  };
});

export const populate = {
  [pagesToLayoutsName]: {
    with: pagesToLayoutsPopulate,
  },
};
