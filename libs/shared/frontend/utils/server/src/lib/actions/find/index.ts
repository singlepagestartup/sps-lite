"use server";

import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

/**
 * @deprecated Use `@sps/shared-frontend-server-api` instead of that function
 */
export async function action<T>(params: {
  model: string;
  populate: any;
  rootPath?: string;
  filters?: any;
  pagination?: any;
  tag?: string;
  sort?: string;
  orderBy?: any;
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
    orderBy,
  } = params;

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
      filters,
      pagination,
      sort,
      orderBy,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const options: NextRequestOptions = {
    next: {
      revalidate,
    },
  };

  if (tag) {
    options.next.tags = [tag];
  }

  const res = await fetch(
    `${BACKEND_URL}${rootPath}/${model}?${stringifiedQuery}`,
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

  const transformedData = transformResponseItem<T[]>(json);

  return transformedData;
}
