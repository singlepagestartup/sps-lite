import { sitemap } from "@sps/sps-website-builder-frontend";

export async function GET() {
  return sitemap.GET();
}
