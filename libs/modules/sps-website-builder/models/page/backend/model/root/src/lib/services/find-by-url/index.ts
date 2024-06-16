import { db } from "@sps/sps-website-builder-backend-db";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { service as find } from "../find";
import { service as findById } from "../find-by-id";
import { EntityWithUrls, service as withUrls } from "../with-urls";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

type FindByUrlServiceProps = {
  url: string;
} & Partial<FindByIdServiceProps>;

export async function service(
  props: FindByUrlServiceProps,
): ReturnType<typeof findById> {
  if (props.url.includes("?")) {
    throw new Error("Query parameters are not allowed");
  }

  const splittedUrl = props.url.split("/").filter((url) => url !== "");
  const pages = await find();
  const pageWithEqualUrlParts = pages.filter((page) => {
    const pageUrlParts = page.url.split("/").filter((url) => url !== "");

    if (splittedUrl.length !== pageUrlParts.length) {
      return false;
    }

    return true;
  });

  const filledPages: EntityWithUrls[] = [];

  for (const pageWithEqualUrlPart of pageWithEqualUrlParts) {
    const entityWithUrls = await withUrls({
      id: pageWithEqualUrlPart.id,
    });

    if (!entityWithUrls) {
      continue;
    }

    filledPages.push(entityWithUrls);
  }

  const targetPage = filledPages.find((page) => {
    if (
      page.urls.find((urlParam) => {
        if (urlParam.url === props.url) {
          return true;
        }

        return false;
      })
    ) {
      return true;
    }

    return false;
  });

  if (!targetPage) {
    throw new Error(`Page with url ${props.url} not found`);
  }

  const populatedPage = await findById({
    id: targetPage.id,
    params: props.params,
  });

  return populatedPage;
}
