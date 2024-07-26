import { NextRequestOptions, transformResponseItem } from "@sps/shared-utils";
import QueryString from "qs";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export interface IActionProps {
  route: string;
  host: string;
  catchErrors?: boolean;
  tag?: string;
  revalidate?: number;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export async function action<T>(props: IActionProps): Promise<T[] | undefined> {
  const productionBuild = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

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
    try {
      const json = await res.json();

      if (props.catchErrors || productionBuild) {
        console.error(json.error);

        return;
      } else {
        throw new Error(JSON.stringify(json.data));
      }
    } catch (error) {
      const requestError = new Error(`${res.status} | ${res.statusText}`);

      if (props.catchErrors || productionBuild) {
        console.error(`${requestError.message} | ${host}${route} | ${error}`);

        return;
      } else {
        throw requestError;
      }
    }
  }

  const json = await res.json();

  if (json.error) {
    if (props.catchErrors || productionBuild) {
      console.error(json.error);

      return;
    } else {
      throw new Error(json.error.message);
    }
  }

  const transformedData = transformResponseItem<T[]>(json);

  return transformedData;
}
