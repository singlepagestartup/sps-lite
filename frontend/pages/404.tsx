import { IPageProps } from "types";
import PublicPage from "~components/layout/public-page-layouts";
import { getNotFoundPage } from "~utils/api";

export default function NotFoundPage(props: IPageProps) {
  return <PublicPage {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const pageData = await getNotFoundPage(locale);

  return {
    props: {
      ...pageData,
    },
    revalidate: 600,
  };
};
