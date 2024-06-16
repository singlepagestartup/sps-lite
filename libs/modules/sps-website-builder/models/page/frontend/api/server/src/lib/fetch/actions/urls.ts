"use server";

import {
  route,
  IModel,
} from "@sps/sps-website-builder-models-page-frontend-api-model";
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
        tags: [route],
      },
    };

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/pages/urls`,
      options,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    const transformedData = transformResponseItem<IModel>(json);

    const paths =
      transformedData?.urls?.map(
        (pageParams: { url: string; locale: string }) => {
          return {
            ...pageParams,
            url:
              pageParams.url === "/"
                ? []
                : pageParams.url.split("/").filter((p) => p !== ""),
          };
        },
      ) || [];

    return paths;
  } catch (error) {
    console.error(error);
    return [];
  }
}
