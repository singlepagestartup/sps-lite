import { NextResponse } from "next/server";
import { BACKEND_URL } from "~utils/envs";

export async function GET() {
  const path = `${BACKEND_URL}/api/i18n/locales`;

  const res = await fetch(path);
  const data = await res.json();

  return NextResponse.json(data);
}
