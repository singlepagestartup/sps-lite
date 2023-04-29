import { stringify } from "qs";
import { transformResponseItem } from "./transform-response-item";

interface IFetchProps {
  url: string;
  params?: any;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

export async function getBackendData(props: IFetchProps) {
  const { url, params, data, method = "GET" } = props;

  const query = stringify(params || {}, {
    encodeValuesOnly: true,
  });

  const backendData = await fetch(`${url}?${query}`, {
    method,
    body: data,
    next: { revalidate: 10 },
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
      console.error(`\n ${method} ${url}?${query} | ${error.message}`);
    });

  return backendData;
}
