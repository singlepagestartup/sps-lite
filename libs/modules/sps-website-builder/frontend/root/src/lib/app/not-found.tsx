"use server";

import { BACKEND_URL, getBackendData } from "@sps/shared-frontend-utils-client";
import { populate as pagePopulate } from "@sps/sps-website-builder-models-page-contracts-extended";
import type { IModel as IBackendPage } from "@sps/sps-website-builder-models-page-contracts";
import { Component } from "@sps/sps-website-builder-page-blocks-component";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";

export async function NotFoundPage() {
  const pages = (await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages`,
    params: {
      populate: pagePopulate,
      filters: {
        $and: [
          {
            url: "/404",
          },
        ],
      },
    },
  })) as IBackendPage[];

  console.log(`🚀 ~ NotFoundPage ~ pages:`, pages);

  if (!pages?.length) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="font-bold text-4xl">Not found</p>
      </div>
    );
  }
  const notFoundPage = await api.fetch.findOne({ id: pages[0].id });

  if (!notFoundPage || !notFoundPage.pageBlocks) {
    return <div>Not found</div>;
  }

  return <Component isServer={true} variant="default" data={notFoundPage} />;
}
