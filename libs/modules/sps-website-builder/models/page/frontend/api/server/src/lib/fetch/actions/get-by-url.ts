"use server";

import {
  route,
  IModelExtended,
} from "@sps/sps-website-builder-models-page-frontend-api-model";
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

  const res = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url?` +
      new URLSearchParams({
        url: localUrl,
      }),
    options,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error.message || "Failed to fetch data");
  }

  const transformedData = transformResponseItem<IModelExtended>(json);

  if (!transformedData?.id) {
    return;
  }

  return transformedData;
}
