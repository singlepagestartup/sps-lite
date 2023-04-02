import { IPublicPage } from "types";
import PublicPageFooters from "~components/footers/public-page-footers";
import Meta from "~components/meta";
import PublicPageNavbars from "~components/navbars/public-page-navbars";
import PageBlocks from "~components/page-blocks";
import Topbars from "~components/topbars/public-page-topbar";

export default function Simple(props: IPublicPage) {
  return (
    <>
      <Meta {...props.meta} />
      <div className="relative">
        {props.publicPageTopbar ? (
          <Topbars {...props.publicPageTopbar} />
        ) : null}
        <PublicPageNavbars {...props.publicPageNavbar} />
        <div className="pt-16">
          <PageBlocks {...props} />
        </div>
        <PublicPageFooters {...props.publicPageFooter} />
      </div>
    </>
  );
}
