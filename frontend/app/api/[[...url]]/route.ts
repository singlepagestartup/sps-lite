import { NextResponse } from "next/server";
import QueryString from "qs";
import {
  layoutPopulate,
  modalPopulate,
  pageBlockPopulate,
  slideOverPropulate,
} from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

const models = [
  {
    url: "flyouts",
    populate: pageBlockPopulate,
  },
  { url: "footers", populate: pageBlockPopulate },
  { url: "i18n/locales", populate: pageBlockPopulate },
  { url: "layouts", populate: layoutPopulate },
  { url: "modals", populate: modalPopulate },
  { url: "navbars", populate: pageBlockPopulate },
  { url: "sidebars", populate: pageBlockPopulate },
  { url: "slide-overs", populate: slideOverPropulate },
  { url: "topbars", populate: pageBlockPopulate },
];

export async function generateStaticParams() {
  const paths = [];

  for (const model of models) {
    const path = `${BACKEND_URL}/api/${model.url}`;
    const items = await fetch(path).then((res) => res.json());

    paths.push({
      url: model.url.split("/"),
    });

    if (items?.data?.length) {
      for (const item of items.data) {
        paths.push({
          url: [...model.url.split("/"), `${item.id}`],
        });
      }
    }
  }

  return paths;
}

export async function GET(request: Request, { params }: any) {
  const model = models.find((item) => item.url.includes(params.url[0]));

  const query = QueryString.stringify({
    locale: "all",
    populate: model?.populate ? model.populate : pageBlockPopulate,
  });

  const path = `${BACKEND_URL}/api/${params.url.join("/")}?${query}`;

  const res = await fetch(path);
  const data = await res.json();

  return NextResponse.json(data);
}
