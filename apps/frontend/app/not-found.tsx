import PageBlocks from "~components/page-blocks";
import { getBackendData } from "@sps/utils";
import { populate as pagePopulate } from "@sps/sps-website-builder/lib/redux/services/api/page/populate";
import { BACKEND_URL } from "@sps/utils";
import { IEntity as IBackendPage } from "@sps/sps-website-builder/lib/redux/services/api/page/interfaces";

export default async function NotFoundPage() {
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

  return <PageBlocks pageBlocks={pages[0].pageBlocks} />;
}
