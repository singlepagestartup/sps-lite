"use server";

import {
  route,
  IModel,
  host,
  tag,
} from "@sps/sps-host/models/page/frontend/api/model";
import {
  REVALIDATE,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export async function action() {
  try {
    const noCache = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;
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

    const res = await fetch(`${host}${route}/urls`, options);

    if (!res.ok) {
      const error = new Error(res.statusText);

      throw new Error(error.message || "Failed to fetch data");
    }

    const json = await res.json();

    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    const transformedData = transformResponseItem<IModel>(json);

    const paths =
      transformedData?.urls?.map((pageParams: { url: string }) => {
        return {
          ...pageParams,
          url:
            pageParams.url === "/"
              ? []
              : pageParams.url.split("/").filter((p) => p !== ""),
        };
      }) || [];

    return paths;
  } catch (error) {
    console.error(error);
    return [];
  }
}
