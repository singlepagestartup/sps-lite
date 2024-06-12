"use server";

interface Params {
  url?: string | string[];
}

export async function action({
  page,
  params,
}: {
  page: {
    id: number;
    url: string;
  };
  params: Params;
}): Promise<string[]> {
  const splittedParams = Array.isArray(params.url)
    ? params.url
    : params.url?.split("/").filter((u: string) => u !== "");

  if (!page.id) {
    return [];
  }

  const filters: any[] = [];

  const urlSegments = page.url?.split("/").filter((u: string) => u !== "");

  for (const [index, urlSegment] of urlSegments.entries()) {
    if (urlSegment.includes(".") && splittedParams && splittedParams[index]) {
      const sanitizedUrlSegment = urlSegment
        .replaceAll("[", "")
        .replaceAll("]", "");

      const filter = {
        [sanitizedUrlSegment]: splittedParams[index],
      };

      filters.push(filter);
    }
  }

  return filters;
}
