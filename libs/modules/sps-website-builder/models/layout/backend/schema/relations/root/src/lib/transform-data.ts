import { transformData as pagesTransformData } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";

export function transformData({ data }: { data: any }) {
  const transformedData = pagesTransformData({ data });

  return transformedData;
}
