import { db } from "@sps/sps-website-builder-backend-db";
import { service as getModelPages } from "../get-model-pages";

export async function service() {
  const pages = await db.query.SPSWBPage.findMany();

  const filledPages: {
    urls: {
      url: string;
    }[];
    id: string;
  }[] = [];

  for (const page of pages) {
    if (
      page.url.includes(".") &&
      page.url.includes("[") &&
      page.url.includes("]")
    ) {
      const modelRoutes = page.url
        .split("/")
        .filter((url: string) => url.includes("."));

      const modelBasedUrls = await getModelPages({ modelRoutes, page });

      filledPages.push({
        ...page,
        urls: modelBasedUrls,
      });

      continue;
    }

    filledPages.push({
      ...page,
      urls: [{ url: page.url }],
    });
  }

  return filledPages;
}
