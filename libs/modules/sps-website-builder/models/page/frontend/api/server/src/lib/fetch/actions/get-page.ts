"use server";

import {
  populate,
  route,
  IModelExtended,
} from "@sps/sps-website-builder-models-page-frontend-api-model";
import QueryString from "qs";
import { notFound } from "next/navigation";
import { action as getByUrl } from "./get-by-url";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";

interface Params {
  url?: string | string[];
}

export async function action(params: Params) {
  const { url } = params;

  const options: NextRequestOptions = {
    next: {
      revalidate: 0,
      tags: [route],
    },
  };

  let targetPage = await getByUrl({ url });

  if (!targetPage) {
    targetPage = await getByUrl({ url: "/404" });
  }

  if (!targetPage) {
    const pages = await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
      ...params,
    });

    if (pages.length) {
      return notFound();
    }

    return;
  }

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const request = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/${targetPage.id}?${stringifiedQuery}`,
    options,
  );

  const filledTargetPage = await request.json();
  const transformedData = transformResponseItem(filledTargetPage);

  return transformedData;
}
