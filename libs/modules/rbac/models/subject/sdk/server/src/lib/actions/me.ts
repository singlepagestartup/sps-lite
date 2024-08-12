"use server";

import { host, route, IModel } from "@sps/rbac/models/subject/sdk/model";
import {
  NextRequestOptions,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export interface IActionProps {
  catchErrors?: boolean;
  options?: NextRequestOptions;
}

export async function action(props: IActionProps): Promise<IModel | undefined> {
  const productionBuild = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

  const { options } = props;

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

  const res = await fetch(`${host}${route}/me`, requestOptions);

  const json = await responsePipe<{ data: IModel }>({
    res,
    catchErrors: props.catchErrors || productionBuild,
  });

  if (!json) {
    return;
  }

  const transformedData = transformResponseItem<IModel>(json);

  return transformedData;
}
