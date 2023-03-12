import { IPageProps } from "types";
import PublicPage from "~components/layout/public-page-layouts";
import Page from "~utils/api/Page";

export default function NotFoundPage(props: IPageProps) {
  return <PublicPage {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const page = await new Page({ name: `not-found-page`, locale }).get();

  return {
    props: page,
    revalidate: 600,
  };
};
