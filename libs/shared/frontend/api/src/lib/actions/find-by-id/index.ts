import { NextRequestOptions, transformResponseItem } from "@sps/shared-utils";
import QueryString from "qs";

export interface IActionProps {
  id: string;
  route: string;
  tag?: string;
  revalidate?: number;
  host: string;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export async function action<T>(props: IActionProps): Promise<T | undefined> {
  const { id, params, route, options, host } = props;

  const stringifiedQuery = QueryString.stringify(params, {
    encodeValuesOnly: true,
  });

  const requestOptions: NextRequestOptions = {
    credentials: "include",
    ...options,
    next: {
      tags: [[route, id].join("/")],
      ...options?.next,
    },
  };

  const res = await fetch(
    `${host}${route}/${id}?${stringifiedQuery}`,
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

  const transformedData = transformResponseItem<T>(json);

  return transformedData;
}
