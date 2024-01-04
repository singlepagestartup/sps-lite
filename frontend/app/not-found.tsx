import PageBlocks from "~components/page-blocks";
import { getBackendData } from "~utils/api";
import { populate as pagePopulate } from "~redux/services/backend/extensions/sps-website-builder/api/page/populate";
import { BACKEND_URL } from "~utils/envs";
import { IEntity as IBackendPage } from "~redux/services/backend/extensions/sps-website-builder/api/page/interfaces";

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
