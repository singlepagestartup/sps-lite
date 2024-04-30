import { transformData as pagesTransformData } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";

export function transformData({ data }) {
  const transformedData = pagesTransformData({ data });

  return transformedData;
}
