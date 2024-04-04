import {
  BACKEND_URL,
  fetch as utilsFetch,
} from "@sps/shared-frontend-utils-client";
import { populate, route, IModelExtended } from "../model";
import QueryString from "qs";
import { transformResponseItem } from "@sps/shared-utils";

export const api = {
  findOne: async ({ id }: { id: number }) => {
    return await utilsFetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
    });
  },
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
      `${BACKEND_URL}/api/sps-website-builder/${route}/by-page-url?${stringifiedQuery}`,
      { next: { revalidate: 3600 } } as any,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    return transformedData;
  },
};
