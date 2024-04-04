import { stringify } from "qs";
import { gzip } from "pako";
import { transformResponseItem } from "@sps/shared-utils";

interface IFetchProps {
  url: string;
  params?: any;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

interface IHeaders {
  [key: string]: string;
}

export async function getBackendData(props: IFetchProps) {
  const { url, params, data, method = "GET" } = props;

  const query = stringify(params || {}, {
    encodeValuesOnly: true,
  });

  const compressedQuery = gzip(query);
  const base64CompressedQuery = Buffer.from(compressedQuery).toString("base64");

  const headers: IHeaders = {
    "Query-Encoding": "application/gzip",
  };

  if (process.env["NEXT_PUBLIC_BACKEND_TOKEN"]) {
    headers["Authorization"] =
      `Bearer ${process.env["NEXT_PUBLIC_BACKEND_TOKEN"]}`;
  }

  const backendData = await fetch(`${url}?${base64CompressedQuery}`, {
    method,
    body: data,
    // next: { revalidate: 10 },
    cache: "no-cache",
    headers,
  })
    .then(async (res) => {
      const jsonRes = await res.json();

      if (Array.isArray(jsonRes.data)) {
        const result: any = jsonRes.data.map((item: any) =>
          transformResponseItem(item),
        );
        result["_meta"] = jsonRes?.meta as any;

        return result;
      } else {
        return {
          ...transformResponseItem(jsonRes.data),
          _meta: jsonRes.meta,
        };
      }
    })
    .catch((error) => {
      error; //?
      console.error(`\n ${method} ${url}?${query} | ${error.message}`);
    });

  return backendData;
}
