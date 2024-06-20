import { sitemap } from "@sps/sps-website-builder/frontend/root";

export async function GET() {
  return sitemap.GET();
}
