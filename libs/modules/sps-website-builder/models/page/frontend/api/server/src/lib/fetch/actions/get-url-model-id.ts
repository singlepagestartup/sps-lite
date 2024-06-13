"use server";

import { action as getByUrl } from "./get-by-url";
import { action as getFiltersFromUrl } from "./get-filters-from-url";

interface Params {
  url?: string | string[];
}

export async function action({
  url,
  modelName,
}: {
  url: Params["url"];
  modelName: string;
}): Promise<string | undefined> {
  const page = await getByUrl({ url });

  if (!page) {
    return;
  }

  const filters = await getFiltersFromUrl({ page, params: { url } });

  const targetFilter = filters.find(
    (filter) => filter[modelName] !== undefined,
  );

  const id = targetFilter?.[modelName];

  return id;
}
