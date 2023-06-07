import { NextResponse } from "next/server";
import QueryString from "qs";
import { modalPopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export async function GET() {
  const query = QueryString.stringify({
    locale: "all",
    populate: modalPopulate,
  });

  const path = `${BACKEND_URL}/api/modals?${query}`;

  const res = await fetch(path);
  const data = await res.json();

  return NextResponse.json(data);
}
