"use server";

import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";
import { cookies } from "next/headers";

export async function action<T>(params: {
  model: string;
  populate: any;
  rootPath?: string;
  filters?: any;
  pagination?: any;
  tag?: string;
  sort?: string;
  revalidate?: number;
}): Promise<T[]> {
  const {
    populate,
    model,
    rootPath = "/api/sps-website-builder",
    filters,
    pagination,
    tag,
    sort,
    revalidate = 0,
  } = params;

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
      filters,
      pagination,
      sort,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const options: NextRequestOptions = {
    next: {
      revalidate,
    },
    headers: { Cookie: cookies().toString() },
  };

  if (tag) {
    options.next.tags = [tag];
  }

  const res = await fetch(
    `${BACKEND_URL}${rootPath}/${model}?${stringifiedQuery}`,
    options,
  );

  const json = await res.json();

  if (!res.ok) {
    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    throw new Error("Failed to fetch data");
  }

  const transformedData = transformResponseItem(json);

  return transformedData;
}
