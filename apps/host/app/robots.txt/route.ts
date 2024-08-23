import { robots } from "@sps/host/frontend/component";

export async function GET() {
  return robots.GET();
}
