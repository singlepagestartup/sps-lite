"use server";

import { route } from "@sps/sps-website-builder-models-page-frontend-api-model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";

interface Params {
  url?: string | string[];
}

export async function action({ url }: Params) {
  const localUrl =
    typeof url === "string"
      ? url.startsWith("/")
        ? url
        : `/${url}`
      : `/${url?.join("/") || ""}`;

  if (!localUrl) {
    return;
  }

  const options: NextRequestOptions = {
    next: {
      revalidate: 0,
      tags: [route],
    },
  };

  const request = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url?` +
      new URLSearchParams({
        url: localUrl,
      }),
    options,
  );

  const targetPage = await request.json();
  const transformedData = transformResponseItem(targetPage);

  if (!transformedData?.id) {
    return;
  }

  return transformedData;
}
