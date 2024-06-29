"use server";

import {
  route,
  IModel,
  tag,
} from "@sps/sps-host/models/page/frontend/api/model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";

export async function action() {
  try {
    const options: NextRequestOptions = {
      next: {
        revalidate: 0,
        tags: [tag],
      },
    };

    const res = await fetch(`${BACKEND_URL}${route}/urls`, options);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
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
