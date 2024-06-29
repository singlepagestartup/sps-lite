import { factory } from "@sps/shared-frontend-server-api";
import QueryString from "qs";
import { BACKEND_URL, transformResponseItem } from "@sps/shared-utils";
import {
  route,
  IModelExtended,
  populate,
  host,
} from "@sps/sps-website-builder/models/layout/frontend/api/model";

export const api = {
  ...factory<IModelExtended>({
    route,
    host,
  }),
  getByPageUrl: async (params: any = {}) => {
    const { url } = params;

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
      `${BACKEND_URL}${route}/by-page-url?${stringifiedQuery}`,
      { next: { revalidate: 3600 } } as any,
    );

    if (!res.ok) {
      const error = new Error(res.statusText);

      throw new Error(error.message || "Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    return transformedData;
  },
};
