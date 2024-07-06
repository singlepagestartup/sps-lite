"use server";

import {
  tag,
  populate,
  route,
  IModelExtended,
  host,
} from "@sps/sps-host/models/page/frontend/api/model";
import {
  REVALIDATE,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

interface Params {
  url: string;
  catchError?: boolean;
}

export async function action({ url, catchError = false }: Params) {
  try {
    const options: NextRequestOptions = {
      next: {
        revalidate: REVALIDATE,
        tags: [tag],
      },
    };

    const stringifiedQuery = QueryString.stringify(
      {
        url,
        populate,
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
      const error = new Error(res.statusText);

      throw new Error(error.message || "Failed to fetch data");
    }

    const json = await res.json();

    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    const transformedData = transformResponseItem<IModelExtended>(json);

    if (!transformedData?.id) {
      return;
    }

    return transformedData;
  } catch (error) {
    console.log(`find-by-url ~ action ~ error:`, error);

    if (!catchError) {
      throw error;
    }
  }

  return;
}
