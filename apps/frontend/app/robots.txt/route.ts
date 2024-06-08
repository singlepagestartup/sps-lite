// import { robots } from "@sps/sps-website-builder-frontend";

export async function GET() {
  // return robots.GET();
  return new Response({ test: true } as any, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "text/plain",
    },
  });
}
