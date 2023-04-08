import PublicPageFooters from "~components/footers/public-page-footers";
import Meta from "~components/meta";
import PublicPageNavbars from "~components/navbars/public-page-navbars";
import PageBlocks from "~components/page-blocks";
import Topbars from "~components/topbars/public-page-topbars";
import { ISpsLitePublicPageLayoutBlock } from ".";
import SlideOvers from "~components/slide-overs";

export default function Simple(props: ISpsLitePublicPageLayoutBlock) {
  console.log(`🚀 ~ Simple ~ props:`, props);
  return (
    <>
      {props.meta ? <Meta {...props.meta} /> : null}
      <div className="relative">
        {props.publicPageTopbar ? (
          <Topbars {...props.publicPageTopbar} />
        ) : null}
        <PublicPageNavbars {...props.publicPageNavbar} />
        <div className="pt-16">
          {props.publicPageLayout.sidebar?.pageBlocks?.length ? (
            <div className="w-full flex flex-row">
              <div className="lg:w-3/12">
                <PageBlocks
                  pageBlocks={props.publicPageLayout.sidebar.pageBlocks}
                />
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
