import { robots } from "@sps/sps-host/frontend/root";

export async function GET() {
  return robots.GET();
}
