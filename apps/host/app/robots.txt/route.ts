import { robots } from "@sps/sps-host/frontend/component";

export async function GET() {
  return robots.GET();
}
