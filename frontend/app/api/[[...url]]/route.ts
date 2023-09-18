import { NextRequest, NextResponse } from "next/server";
import { gzip } from "pako";
import QueryString from "qs";
import { frontendApiStaticModels } from "~redux/services/backend";
import { pageBlockPopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";
let generateStaticParams;

function preparePathAndHeaders({ params }: any) {
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

  return { headers, path };
}

let POST = async function POST(request: NextRequest, { params }: any) {
  const { headers, path } = preparePathAndHeaders({ params });

  const formData = await request.formData();
  const res = await fetch(path, {
    method: "POST",
    headers: {
      ...request.headers,
      ...headers,
    },
    body: formData,
  });
  const data = await res.json();

  return NextResponse.json(data);
};

let PUT = async function PUT(request: NextRequest, { params }: any) {
  const { headers, path } = preparePathAndHeaders({ params });

  const formData = await request.formData();
  const res = await fetch(path, {
    method: "PUT",
    headers: {
      ...request.headers,
      ...headers,
    },
    body: formData,
  });
  const data = await res.json();

  return NextResponse.json(data);
};

let DELETE = async function DELETE(request: NextRequest, { params }: any) {
  const { headers, path } = preparePathAndHeaders({ params });

  const res = await fetch(path, {
    method: "DELETE",
    headers: {
      ...request.headers,
      ...headers,
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
};

async function GET(request: NextRequest, { params }: any) {
  const { headers, path } = preparePathAndHeaders({ params });

  const res = await fetch(path, {
    headers: {
      // ...request.headers,
      ...headers,
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}

// NODE_ENV=test is ICP deployment workflow
// because Next.js doesn't support envs, except "local" | "development" | "test" | "production"
// If set NODE_ENV=local and .env.local to ICP deployment. You should create and
// delete that file for npm run dev, because "local" has the highest priority
if (process.env.NODE_ENV === "test") {
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

  // If you allow that methods on static export, you wouldn't get static pages in /out/api/
  // @ts-ignore
  POST = undefined;
  // @ts-ignore
  PUT = undefined;
  // @ts-ignore
  DELETE = undefined;
}

export { POST, PUT, DELETE, GET, generateStaticParams };
