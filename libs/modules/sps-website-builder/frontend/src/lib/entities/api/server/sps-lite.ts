import { BACKEND_URL, transformResponseItem } from "@sps/utils";
import QueryString from "qs";

export const api = {
  findOne: async <T>(params: {
    id: number;
    model: string;
    populate: any;
  }): Promise<T> => {
    const { id, populate, model } = params;

    const stringifiedQuery = QueryString.stringify(
      {
        populate,
      },
      {
        encodeValuesOnly: true,
      },
    );

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/${model}/${id}?${stringifiedQuery}`,
      { next: { revalidate: 3600 } } as any,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    return transformedData;
  },
};

const h = {
  headers: {
    host: "localhost:3000",
    connection: "keep-alive",
    "sec-ch-ua":
      '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    "sec-ch-ua-mobile": "?0",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "next-url": "/en/terms-and-conditions",
    "sec-ch-ua-platform": '"macOS"',
    accept: "*/*",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "http://localhost:3000/terms-and-conditions/",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en,ru;q=0.9",
    cookie:
      "_ga=GA1.1.1043547975.1691075732; _ym_uid=1691075732398655421; _ym_d=1691075732; _ga_WDTKG46K77=GS1.1.1691075731.1.1.1691075745.0.0.0; _ga_25R81SHKNT=GS1.1.1693210394.5.0.1693210394.0.0.0; _ga_Q6DF6XG10X=GS1.1.1697054559.2.0.1697054559.0.0.0; adminer_permanent=; adminer_version=4.8.1",
    "x-forwarded-host": "localhost:3000",
    "x-forwarded-port": "3000",
    "x-forwarded-proto": "http",
    "x-forwarded-for": "::1",
  },
};
