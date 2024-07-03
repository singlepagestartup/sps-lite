"use server";

import {
  route,
  IModel,
  host,
  tag,
} from "@sps/sps-host/models/page/frontend/api/model";
import { NextRequestOptions, transformResponseItem } from "@sps/shared-utils";

export async function action() {
  try {
    const options: NextRequestOptions = {
      next: {
        revalidate: 0,
        tags: [tag],
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
