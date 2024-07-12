import { NextRequestOptions, transformResponseItem } from "@sps/shared-utils";
import QueryString from "qs";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export interface IActionProps {
  route: string;
  host: string;
  tag?: string;
  revalidate?: number;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export async function action<T>(props: IActionProps): Promise<T[] | undefined> {
  const { params, route, options, host } = props;

  const stringifiedQuery = QueryString.stringify(params, {
    encodeValuesOnly: true,
  });

  const noCache = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;
  const cacheControlOptions: NextRequestOptions["headers"] = noCache
    ? { "Cache-Control": "no-cache" }
    : {};

  const requestOptions: NextRequestOptions = {
    credentials: "include",
    ...options,
    headers: {
      ...cacheControlOptions,
      ...options?.headers,
    },
    next: {
      tags: [route],
      ...options?.next,
    },
  };

  const res = await fetch(
    `${host}${route}?${stringifiedQuery}`,
    requestOptions,
  );

  if (!res.ok) {
    const error = new Error(res.statusText);

    console.error(`${error.message} | ${host}${route} | ${error}`);

    return;
  }

  const json = await res.json();

  if (json.error) {
    console.error(`${json.error.message} | ${host}${route} | ${json.error}`);

    return;
  }

  const transformedData = transformResponseItem<T[]>(json);

  return transformedData;
}
