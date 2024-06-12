import { FRONTEND_URL } from "@sps/shared-utils";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";

async function generateSiteMap() {
  const pages = await api.fetch.find();

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
