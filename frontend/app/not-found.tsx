import { IBackendPage } from "types/collection-types";
import Layouts from "~components/layouts";
import { getBackendData } from "~utils/api";
import { pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export default async function NotFoundPage(props: IBackendPage) {
  const pages = (await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: {
      populate: pagePopulate,
      filters: {
        url: `/404`,
      },
    },
  })) as IBackendPage[];

  if (!pages?.length) {
    <div>Not found</div>;
  }

  return <Layouts {...pages[0]} />;
}
