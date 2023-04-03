import {
  IBackendMeta,
  IBackendNotFoundPage,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
} from "types/single-types/sps-lite";
import PublicPageLayouts from "~components/layouts/public-page-layouts";
import Page from "~utils/api/Page";

export interface INotFoundPage extends IBackendNotFoundPage {
  meta?: IBackendMeta;
  publicPageTopbar?: IBackendPublicPageTopbar;
  publicPageNavbar: IBackendPublicPageNavbar;
  publicPageFooter: IBackendPublicPageFooter;
  publicPageLayout: IBackendPublicPageLayout;
}

export default function NotFoundPage(props: INotFoundPage) {
  return <PublicPageLayouts {...props} />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const page = await new Page({ name: `not-found-page`, locale }).get();

  return {
    props: page,
    revalidate: 600,
  };
};
