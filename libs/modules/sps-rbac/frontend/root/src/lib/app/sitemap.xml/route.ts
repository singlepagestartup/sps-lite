"use server";

import type { IModel as IBackendPage } from "@sps/sps-website-builder-models-page-contracts";
import {
  BACKEND_URL,
  FRONTEND_URL,
  getBackendData,
} from "@sps/shared-frontend-utils-client";

async function generateSiteMap() {
  const pages: IBackendPage[] = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages`,
    params: { locale: "all", pagination: { limit: -1 } },
  }).catch((error) => {
    console.log("🚀 ~ generateSiteMap ~ error:", error);
  });

  if (!pages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    </urlset>
  `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       ?.map((page) => {
         return `
           <url>
               <loc>${`${FRONTEND_URL}${page.url}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function GET() {
  const body = await generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
