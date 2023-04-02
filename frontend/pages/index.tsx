import { IPublicPage } from "types";
import PublicPageLayouts from "~components/layouts/public-page-layouts";
import Page from "~utils/api/Page";

export default function Home(props: IPublicPage) {
  return <PublicPageLayouts {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const page = await new Page({ name: `main-page`, locale }).get();

  return {
    props: page,
    revalidate: 600,
  };
};
