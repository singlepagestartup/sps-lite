import { BACKEND_URL } from "@sps/shared-utils";
import { db } from "@sps/sps-website-builder-backend-db";
import {
  schemaName,
  Table,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";
import { util as buildTreePaths } from "./build-tree-paths";

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

  if (saturatedSegments.length === 0) {
    return { ...result, urls: [{ url: "/" }] };
  }

  const constructedUrls = buildTreePaths({
    segments: saturatedSegments,
  });

  const urls: EntityWithUrls["urls"] = constructedUrls.map((url) => {
    return {
      url: url.join("/").startsWith("/") ? url.join("/") : `/${url.join("/")}`,
    };
  });

  return { ...result, urls };
}
