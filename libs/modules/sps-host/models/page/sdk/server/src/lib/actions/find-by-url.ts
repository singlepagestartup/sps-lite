"use server";

import { route, IModel, host } from "@sps/sps-host/models/page/sdk/model";
import { NextRequestOptions, transformResponseItem } from "@sps/shared-utils";
import QueryString from "qs";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

interface Params {
  url: string;
  catchErrors?: boolean;
}

export async function action({ url, catchErrors = false }: Params) {
  const productionBuild = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

  const noCache = productionBuild;

  const cacheControlOptions: NextRequestOptions["headers"] = noCache
    ? { "Cache-Control": "no-cache" }
    : {};

  const options: NextRequestOptions = {
    headers: {
      ...cacheControlOptions,
    },
    next: {
      // revalidate: 0,
      tags: [route],
    },
  };

  const stringifiedQuery = QueryString.stringify(
    {
      url,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const res = await fetch(
    `${host}${route}/find-by-url?${stringifiedQuery}`,
    options,
  );

  if (!res.ok) {
    try {
      const json = await res.json();

      if (catchErrors || productionBuild) {
        console.error(json.error);

        return;
      } else {
        throw new Error(JSON.stringify(json.data));
      }
    } catch (error) {
      const requestError = new Error(`${res.status} | ${res.statusText}`);

      if (catchErrors || productionBuild) {
        console.error(`${requestError.message} | ${host}${route} | ${error}`);

        return;
      } else {
        throw requestError;
      }
    }
  }

  const json = await res.json();

  if (json.error) {
    if (catchErrors || productionBuild) {
      console.error(json.error);

      return;
    } else {
      throw new Error(json.error.message);
    }
  }

  const transformedData = transformResponseItem<IModel>(json);

  if (!transformedData?.id) {
    return;
  }

  return transformedData;
}
