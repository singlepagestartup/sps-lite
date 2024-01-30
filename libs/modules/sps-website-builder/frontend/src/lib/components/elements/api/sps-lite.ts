import { BACKEND_URL, transformResponseItem } from "@sps/utils";
import QueryString from "qs";

export const api = {
  findByIdAndName: async <T>(params: {
    id: number;
    name: string;
    populate: any;
  }): Promise<T> => {
    const { id, populate, name } = params;

    const stringifiedQuery = QueryString.stringify(
      {
        populate,
      },
      {
        encodeValuesOnly: true,
      },
    );

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/components/${name}/${id}?${stringifiedQuery}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    return transformedData;
  },
};
