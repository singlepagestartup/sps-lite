import { BACKEND_URL, transformResponseItem } from "@sps/utils";
import QueryString from "qs";

export const api = {
  findOne: async <T>(params: {
    id: number;
    model: string;
    populate: any;
  }): Promise<T> => {
    const { id, populate, model } = params;

    const stringifiedQuery = QueryString.stringify(
      {
        populate,
      },
      {
        encodeValuesOnly: true,
      },
    );

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/${model}/${id}?${stringifiedQuery}`,
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
