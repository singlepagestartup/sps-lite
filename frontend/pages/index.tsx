import { IMainPage } from "types/pages";
import PublicPageLayouts from "~components/layouts/public-page-layouts";
import Page from "~utils/api/Page";

export default function MainPage(props: IMainPage) {
  return <PublicPageLayouts {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const page = await new Page({ name: `main-page`, locale }).get();

  return {
    props: page,
    revalidate: 600,
  };
};
