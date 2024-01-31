import { api as parentApi } from "../../../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/interfaces";
import { BACKEND_URL, transformResponseItem } from "@sps/utils";
import QueryString from "qs";

const model = "layouts";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IEntity> => {
    const params = {
      id,
      populate,
      model,
    };

    return parentApi.findOne<IEntity>(params);
  },

  findByPageUrl: async ({ url }: { url: string }) => {
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
      `${BACKEND_URL}/api/sps-website-builder/${model}/by-page-url?${stringifiedQuery}`,
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
