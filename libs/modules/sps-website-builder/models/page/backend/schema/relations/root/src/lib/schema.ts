import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  relation as layoutsRelation,
  populate as layoutsPopulate,
  transformData as layoutsTransformData,
} from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";

export const Relations = relations(Table, (helpers) => {
  return {
    ...layoutsRelation(helpers),
  };
});

export const populate = {
  ...layoutsPopulate,
};

export function transformData({ data }) {
  const transformedData = layoutsTransformData({ data });

  return transformedData;
}
