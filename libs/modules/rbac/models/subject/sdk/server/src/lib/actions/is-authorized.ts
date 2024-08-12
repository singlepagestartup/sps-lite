"use server";

import { host, route } from "@sps/rbac/models/subject/sdk/model";
import {
  NextRequestOptions,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export interface IActionProps {
  catchErrors?: boolean;
  tag?: string;
  revalidate?: number;
  params: {
    action: {
      route: string;
      method: string;
      type?: "HTTP";
    };
  };
  options?: NextRequestOptions;
}

export async function action(
  props: IActionProps,
): Promise<{ ok: true } | undefined> {
  const productionBuild = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

  const { params, options } = props;

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
    `${host}${route}/is-authorized?${stringifiedQuery}`,
    requestOptions,
  );

  const json = await responsePipe<{ data: { ok: true } }>({
    res,
    catchErrors: props.catchErrors || productionBuild,
  });

  if (!json) {
    return;
  }

  const transformedData = transformResponseItem<{ ok: true }>(json);

  return transformedData;
}
