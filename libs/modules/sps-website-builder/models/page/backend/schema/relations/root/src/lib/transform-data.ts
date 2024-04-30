import { transformData as layoutsTransformData } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";

export function transformData({ data }) {
  const transformedData = layoutsTransformData({ data });

  return transformedData;
}
