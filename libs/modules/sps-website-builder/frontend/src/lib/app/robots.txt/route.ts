"use server";

import { BACKEND_URL, getBackendData } from "@sps/utils";

async function generateRobots() {
  const robots = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/robot`,
    params: {
      populate: "*",
    },
  });

  if (!robots?.robots) {
    return "";
  }

  return `${robots.robots}`;
}

export async function GET() {
  const body = await generateRobots();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "text/plain",
    },
  });
}
