import { NextRequestOptions, transformResponseItem } from "@sps/shared-utils";
import QueryString from "qs";

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

export async function action<T>(props: IActionProps): Promise<T[]> {
  const { params, route, options, host } = props;

  const stringifiedQuery = QueryString.stringify(params, {
    encodeValuesOnly: true,
  });

  const requestOptions: NextRequestOptions = {
    credentials: "include",
    ...options,
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

    throw new Error(
      `${error.message} | ${host}${route}` ||
        `Failed to fetch data ${host}${route}`,
    );
  }

  const json = await res.json();

  if (json.error) {
    throw new Error(
      `${json.error.message} | ${host}${route}` ||
        `Failed to fetch data ${host}${route}`,
    );
  }

  const transformedData = transformResponseItem<T[]>(json);

  return transformedData;
}
