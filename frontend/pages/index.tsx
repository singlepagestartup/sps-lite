import {
  IBackendMainPage,
  IBackendMeta,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
} from "types/single-types/sps-lite";
import PublicPageLayouts from "~components/layouts/public-page-layouts";
import Page from "~utils/api/Page";

export interface IMainPage extends IBackendMainPage {
  meta?: IBackendMeta;
  publicPageTopbar?: IBackendPublicPageTopbar;
  publicPageNavbar: IBackendPublicPageNavbar;
  publicPageFooter: IBackendPublicPageFooter;
  publicPageLayout: IBackendPublicPageLayout;
}

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
