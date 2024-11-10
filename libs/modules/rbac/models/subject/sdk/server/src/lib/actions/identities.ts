"use server";

import { host, route } from "@sps/rbac/models/subject/sdk/model";
import {
  NextRequestOptions,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import QueryString from "qs";
import { IModel as IIdentity } from "@sps/rbac/models/identity/sdk/model";

export interface IActionProps {
  id: string;
  catchErrors?: boolean;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export async function action(
  props: IActionProps,
): Promise<IIdentity[] | undefined> {
  const productionBuild = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

  const { params, options, id } = props;

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
    `${host}${route}/${id}/identities?${stringifiedQuery}`,
    requestOptions,
  );

  const json = await responsePipe<{ data: IIdentity[] }>({
    res,
    catchErrors: props.catchErrors || productionBuild,
  });

  if (!json) {
    return;
  }

  const transformedData = transformResponseItem<IIdentity[]>(json);

  return transformedData;
}
