"use server";

import { BACKEND_URL, getBackendData } from "@sps/utils";
import { populate as pagePopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/page/populate";
import type { IModel as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/models/page/interfaces";
import { Component } from "../models/page/component";

export async function NotFoundPage() {
  const pages = (await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages`,
    params: {
      populate: pagePopulate,
      filters: {
        url: "/404",
      },
    },
  })) as IBackendPage[];

  if (!pages?.length) {
    return <div>Not found</div>;
  }

  return <div>404 | Not found</div>;

  // return <Component isServer={true} {...pages[0]} />;
}
