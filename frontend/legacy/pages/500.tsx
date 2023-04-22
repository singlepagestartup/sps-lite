import { IBackendPage } from "types/collection-types";
import Layouts from "~components/layouts";
import { getBackendData } from "~utils/api";
import { pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export default function ErrorPage(props: IBackendPage) {
  // return <Layouts {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const pages = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: {
      locale,
      populate: pagePopulate,
      filters: {
        url: "/500",
      },
    },
  });

  if (!pages?.length) {
    return {
      props: {},
      revalidate: 600,
    };
  }

  return {
    props: pages[0],
    revalidate: 600,
  };
};
