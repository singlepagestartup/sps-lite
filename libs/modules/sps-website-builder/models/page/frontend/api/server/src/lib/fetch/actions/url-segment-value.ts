"use server";

import { route } from "@sps/sps-website-builder/models/page/frontend/api/model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

interface Params {
  url: string;
  segment: string;
}

export async function action(props: Params) {
  const options: NextRequestOptions = {
    next: {
      revalidate: 0,
      tags: [route],
    },
  };

  const stringifiedQuery = QueryString.stringify(
    {
      url: props.url,
      segment: props.segment,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const res = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/url-segment-value?${stringifiedQuery}`,
    options,
  );

  if (!res.ok) {
    const error = new Error(res.statusText);

    throw new Error(error.message || "Failed to fetch data");
  }

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error.message || "Failed to fetch data");
  }

  const transformedData = transformResponseItem<string>(json);

  return transformedData;
}
