"use server";

import { route } from "@sps/sps-website-builder-models-page-frontend-api-model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";

export async function action() {
  const options: NextRequestOptions = {
    next: {
      revalidate: 0,
      tags: [route],
    },
  };

  const request = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/get-urls`,
    options,
  );

  const pagesUrls = await request.json();
  const transformedData = transformResponseItem(pagesUrls);

  const paths =
    transformedData?.urls?.map(
      (pageParams: { url: string; locale: string }) => {
        return {
          ...pageParams,
          url:
            pageParams.url === "/"
              ? []
              : pageParams.url.split("/").filter((p) => p !== ""),
        };
      },
    ) || [];

  return paths;
}
