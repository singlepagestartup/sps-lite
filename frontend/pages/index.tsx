import { IPageProps } from "types";
import PublicPage from "~components/layout/public-page-layouts";
import { getMainPage } from "~utils/api/pages";

export default function Home(props: IPageProps) {
  return <PublicPage {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const pageData = await getMainPage(locale);

  return {
    props: {
      ...pageData,
    },
    revalidate: 600,
  };
};
