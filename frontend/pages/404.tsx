import { IPublicPage } from "types";
import PublicPageLayouts from "~components/layouts/public-page-layouts";
import Page from "~utils/api/Page";

export default function NotFoundPage(props: IPublicPage) {
  return <PublicPageLayouts {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const page = await new Page({ name: `not-found-page`, locale }).get();

  return {
    props: page,
    revalidate: 600,
  };
};
