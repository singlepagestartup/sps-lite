import { BACKEND_URL } from "./envs";
import { transformResponseItem } from "./transform-response-item";
import QueryString from "qs";

export async function findByIdAndName<T>(params: {
  id: number;
  name: string;
  populate: any;
}): Promise<T> {
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
    { next: { revalidate: 3600 } } as any,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();

  const transformedData = transformResponseItem(json);

  return transformedData;
}

export const api = {
  findByIdAndName,
};
