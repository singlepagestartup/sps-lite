import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import {
  relation as pagesRelation,
  populate as pagesPopulate,
  transformData as pagesTransformData,
} from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";

export const Relations = relations(Table, (helpers) => {
  return {
    ...pagesRelation(helpers),
  };
});

export const populate = {
  ...pagesPopulate,
};

export function transformData({ data }) {
  const transformedData = pagesTransformData({ data });

  return transformedData;
}
