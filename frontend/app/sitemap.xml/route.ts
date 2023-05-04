import { getBackendData } from "~utils/api";
import { BACKEND_URL, FRONTEND_URL } from "~utils/envs";
import { IBackendPage } from "types/collection-types";

async function generateSiteMap() {
  const pages: IBackendPage[] = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale: "all", pagination: { limit: -1 } },
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
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
