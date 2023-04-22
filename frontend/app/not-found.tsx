import { IBackendPage } from "types/collection-types";
import PageBlocks from "~components/page-blocks";
import { getBackendData } from "~utils/api";
import { pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export default async function NotFoundPage() {
  const pages = (await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: {
      populate: pagePopulate,
      filters: {
        url: "/404",
      },
    },
  })) as IBackendPage[];

  if (!pages?.length) {
    <div>Not found</div>;
  }

  return <PageBlocks pageBlocks={pages[0].pageBlocks} />;
}
