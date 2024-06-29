"use server";

import {
  BACKEND_URL,
  NextRequestOptions,
  prepareFormDataToSend,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";
import { cookies } from "next/headers";

/**
 * @deprecated Use `@sps/shared-frontend-server-api` instead of that function
 */
export async function action<T>(params: {
  model: string;
  populate: any;
  rootPath?: string;
  data: any;
  tag?: string;
  revalidate?: number;
}): Promise<T> {
  const {
    populate,
    model,
    rootPath = "/api/sps-website-builder",
    tag,
    revalidate = 60,
  } = params;

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const formData = prepareFormDataToSend(params.data);

  const options: NextRequestOptions = {
    next: {
      revalidate,
    },
    headers: { Cookie: cookies().toString() },
    method: "POST",
    body: formData,
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
  const transformedData = transformResponseItem<T>(json);

  return transformedData;
}
