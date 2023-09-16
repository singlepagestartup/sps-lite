import { NextRequest, NextResponse } from "next/server";
import { gzip } from "pako";
import QueryString from "qs";
import { frontendApiStaticModels } from "~redux/services/backend";
import { pageBlockPopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

async function POST(request: NextRequest, { params }: any) {
  const paramsModel = params.url[0].replace(".json", "");
  const sanitizedParamsUrl = params.url.map((param: string) => {
    return param.replace(".json", "");
  });

  const model = frontendApiStaticModels.find((item) =>
    item.url.includes(paramsModel),
  );

  const query = QueryString.stringify({
    locale: "all",
    populate: model?.populate ? model.populate : pageBlockPopulate,
  });

  const headers: any = {
    "Query-Encoding": "application/gzip",
  };

  const compressedQuery = gzip(query);
  const base64CompressedQuery = Buffer.from(compressedQuery).toString("base64");

  const path = `${BACKEND_URL}/api/${sanitizedParamsUrl.join(
    "/",
  )}?${base64CompressedQuery}`;

  const formData = await request.formData();
  const res = await fetch(path, {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await res.json();

  return NextResponse.json(data);
}

let generateStaticParams;

async function GET(request: NextRequest, { params }: any) {
  const paramsModel = params.url[0].replace(".json", "");
  const sanitizedParamsUrl = params.url.map((param: string) => {
    return param.replace(".json", "");
  });

  const model = frontendApiStaticModels.find((item) =>
    item.url.includes(paramsModel),
  );

  const query = QueryString.stringify({
    locale: "all",
    populate: model?.populate ? model.populate : pageBlockPopulate,
  });

  const headers: any = {
    "Query-Encoding": "application/gzip",
  };

  const compressedQuery = gzip(query);
  const base64CompressedQuery = Buffer.from(compressedQuery).toString("base64");

  const path = `${BACKEND_URL}/api/${sanitizedParamsUrl.join(
    "/",
  )}?${base64CompressedQuery}`;

  const res = await fetch(path, {
    headers,
  });
  const data = await res.json();

  return NextResponse.json(data);
}

/**
 * That function needs only for static export, or it will break POST requests -
 * you will get "405 Method not allowed" on any POST reuqest
 */
if (process.env.SERVER_ENVIRONMENT === "icp") {
  generateStaticParams = async function generateStaticParams() {
    const paths = [];

    for (const model of frontendApiStaticModels) {
      const backendPath = `${BACKEND_URL}/api/${model.url}`;
      const items = await fetch(backendPath).then((res) => res.json());

      const path = model.url.split("/");
      path[path.length - 1] = `${path[path.length - 1]}.json`;

      paths.push({
        url: path,
      });

      if (items?.data?.length) {
        for (const item of items.data) {
          paths.push({
            url: [...model.url.split("/"), `${item.id}.json`],
          });
        }
      }
    }

    return paths;
  };
}

export { GET, POST, generateStaticParams };
