import { sitemap } from "@sps/sps-host/frontend/root";

export async function GET() {
  return sitemap.GET();
}
