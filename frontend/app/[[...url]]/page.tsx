import { notFound } from "next/navigation";
import { IBackendPage } from "types/collection-types";
import Layouts from "~components/layouts";
import { getBackendData } from "~utils/api";
import { pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export async function generateStaticParams() {
  return [{ url: [`example`] }];
}

export default async function Page(props: any) {
  const pages = (await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: {
      populate: pagePopulate,
      filters: {
        url: props?.params?.url || `/`,
      },
    },
  })) as IBackendPage[];

  if (!pages.length) {
    return notFound();
  }

  const page = pages[0];

  return <Layouts {...page} />;
}
