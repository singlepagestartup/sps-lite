import { NextResponse } from "next/server";
import QueryString from "qs";
import { pageBlockPopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

const model = "flyouts";

export async function generateStaticParams() {
  const path = `${BACKEND_URL}/api/${model}`;
  const items = await fetch(path).then((res) => res.json());

  return items?.data?.map((item: any) => ({
    id: `${item.id}`,
  }));
}

export async function GET(request: Request, { params }: any) {
  const query = QueryString.stringify({
    locale: "all",
    populate: pageBlockPopulate,
  });

  const path = `${BACKEND_URL}/api/${model}/${params?.id}?${query}`;

  const res = await fetch(path);
  const data = await res.json();

  return NextResponse.json(data);
}
