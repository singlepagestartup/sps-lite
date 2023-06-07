import { NextResponse } from "next/server";
import QueryString from "qs";
import { pageBlockPopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export async function GET() {
  const query = QueryString.stringify({
    locale: "all",
    populate: pageBlockPopulate,
  });

  const path = `${BACKEND_URL}/api/sidebars?${query}`;

  const res = await fetch(path);
  const data = await res.json();

  return NextResponse.json(data);
}
