import PageBlocks from "~components/page-blocks";
import Topbars from "~components/topbars";
import { ISpsLiteLayout } from ".";
import SlideOvers from "~components/slide-overs";
import Sidebars from "~components/sidebars";
import Navbars from "~components/navbars";
import Footers from "~components/footers";

export default function Simple(props: ISpsLiteLayout) {
  return (
    <>
      <div className="relative">
        {props.layout?.topbar ? <Topbars {...props.layout.topbar} /> : null}
        {props.layout?.navbar ? (
          <Navbars {...props.layout?.navbar} topbar={props.layout?.topbar} />
        ) : null}
        <div className="pt-16">
          {props.layout?.sidebar ? (
            <div className="w-full flex flex-row mx-auto max-w-7xl px-2">
              <div className="lg:w-3/12">
                <Sidebars {...props.layout.sidebar} />
              </div>
              <div className="lg:w-9/12">
                <PageBlocks pageBlocks={props.pageBlocks} />
              </div>
            </div>
          ) : (
            <PageBlocks pageBlocks={props.pageBlocks} />
          )}
        </div>
        {props.layout?.footer ? <Footers {...props.layout?.footer} /> : null}
        <SlideOvers />
      </div>
    </>
  );
}
