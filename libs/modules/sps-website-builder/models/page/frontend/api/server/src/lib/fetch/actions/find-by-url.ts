"use server";

import {
  populate,
  route,
  IModelExtended,
} from "@sps/sps-website-builder/models/page/frontend/api/model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

interface Params {
  url: string;
}

export async function action({ url }: Params) {
  const options: NextRequestOptions = {
    next: {
      revalidate: 0,
      tags: [route],
    },
  };

  const stringifiedQuery = QueryString.stringify(
    {
      url,
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const res = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/find-by-url?${stringifiedQuery}`,
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
