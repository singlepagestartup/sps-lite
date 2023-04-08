import PublicPageFooters from "~components/footers/public-page-footers";
import Meta from "~components/meta";
import PublicPageNavbars from "~components/navbars/public-page-navbars";
import PageBlocks from "~components/page-blocks";
import Topbars from "~components/topbars/public-page-topbars";
import { ISpsLitePublicPageLayoutBlock } from ".";
import SlideOvers from "~components/slide-overs";
import Sidebars from "~components/sidebars";

export default function Simple(props: ISpsLitePublicPageLayoutBlock) {
  return (
    <>
      {props.meta ? <Meta {...props.meta} /> : null}
      <div className="relative">
        {props.publicPageTopbar ? (
          <Topbars {...props.publicPageTopbar} />
        ) : null}
        <PublicPageNavbars
          {...props.publicPageNavbar}
          topbar={props.publicPageTopbar}
        />
        <div className="pt-16">
          {props.publicPageLayout.sidebar ? (
            <div className="w-full flex flex-row mx-auto max-w-7xl px-2">
              <div className="lg:w-3/12">
                <Sidebars {...props.publicPageLayout.sidebar} />
              </div>
              <div className="lg:w-9/12">
                <PageBlocks {...props} />
              </div>
            </div>
          ) : (
            <PageBlocks {...props} />
          )}
        </div>
        <PublicPageFooters {...props.publicPageFooter} />
        <SlideOvers />
      </div>
    </>
  );
}
