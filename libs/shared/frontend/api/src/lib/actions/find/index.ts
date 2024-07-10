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

export async function action<T>(props: IActionProps): Promise<T[] | undefined> {
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
