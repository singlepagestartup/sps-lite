import { BACKEND_URL } from "@sps/shared-utils";
import { db } from "@sps/sps-website-builder-backend-db";
import {
  schemaName,
  Table,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";

export type EntityWithUrls = typeof Table.$inferSelect & {
  urls: { url: string }[];
};

export async function service(props: { id: string }): Promise<EntityWithUrls> {
  const result = await db.query[schemaName].findFirst({
    where: eq(Table.id, props.id),
  });

  if (!result) {
    throw new Error(`Entity with id ${props.id} not found`);
  }

  const urls: EntityWithUrls["urls"] = [];
  const segments = result.url.split("/").filter((url) => url !== "");

  const saturatedSegments: Array<string | string[]> = [];

  for (const segment of segments) {
    if (segment.includes("[")) {
      const moduleSegment = segment.replace("[", "").replace("]", "");
      const moduleName = moduleSegment.split(".")[0];
      const modelName = moduleSegment.split(".")[1];
      const param = moduleSegment.split(".")[2];
      const moduleSegmentPaths: string[] = [];

      const moduleData = await fetch(
        `${BACKEND_URL}/api/${moduleName}/${modelName}`,
      ).then((res) => res.json());

      if (moduleData?.data?.length) {
        moduleData.data.forEach((entity: unknown) => {
          if (!entity?.[param]) {
            throw new Error(`Entity with param ${param} not found`);
          }

          moduleSegmentPaths.push(entity[param]);
        });
      }

      saturatedSegments.push(moduleSegmentPaths);
      continue;
    }

    saturatedSegments.push(segment);
  }

  const urlsArray: string[] = [];
  const saturatedSegmentsLength = saturatedSegments.length;

  for (let i = 0; i < saturatedSegmentsLength; i++) {
    const segment = saturatedSegments[i];
    const urlsLength = urlsArray.length;

    if (Array.isArray(segment)) {
      if (!urlsLength) {
        segment.forEach((url) => {
          urlsArray.push(url);
        });
        continue;
      }

      const newUrlsArray: string[] = [];

      for (let j = 0; j < urlsLength; j++) {
        const url = urlsArray[j];

        segment.forEach((segmentUrl) => {
          newUrlsArray.push(`${url}/${segmentUrl}`);
        });
      }

      urlsArray.length = 0;
      urlsArray.push(...newUrlsArray);
      continue;
    }

    if (!urlsLength) {
      urlsArray.push("/" + segment);
      continue;
    }

    urlsArray.forEach((url) => {
      urlsArray.push(`${url}/${segment}`);
    });
  }

  urlsArray.forEach((url) => {
    urls.push({ url });
  });

  if (saturatedSegments.length === 0) {
    urls.push({ url: "/" });
  }

  return { ...result, urls };
}
