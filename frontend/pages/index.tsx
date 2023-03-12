import { IPageProps } from "types";
import PublicPage from "~components/layout/public-page-layouts";
import Page from "~utils/api/Page";

export default function Home(props: IPageProps) {
  return <PublicPage {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const page = await new Page({ name: `main-page`, locale }).get();

  return {
    props: page,
    revalidate: 600,
  };
};
