import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  PagesToLayoutsTable,
  name as pagesToLayoutsName,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { transformManyToManyRelations } from "@sps/shared-backend-database-config";

const relationAliases = {
  [pagesToLayoutsName]: {
    toDataKey: "layouts",
    schemaKey: "layout",
  },
};

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

export function transformData({ data }) {
  const transformedData = transformManyToManyRelations({
    data,
    relationAliases,
  });

  return transformedData;
}
