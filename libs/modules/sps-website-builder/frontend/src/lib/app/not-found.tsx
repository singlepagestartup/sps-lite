"use server";

import { BACKEND_URL, getBackendData } from "@sps/utils";
import { populate as pagePopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/page/populate";
import type { IModel as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/models/page/interfaces";
import { PageBlocks } from "../components/page-blocks/omponent";

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

  return <PageBlocks isServer={false} pageBlocks={pages[0].pageBlocks} />;
}
