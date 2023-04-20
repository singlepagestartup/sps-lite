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
        {props?.topbar ? <Topbars {...props.topbar} /> : null}
        {props?.navbar ? (
          <Navbars {...props?.navbar} topbar={props?.topbar} />
        ) : null}
        <div className="pt-16">
          {props?.sidebar ? (
            <div className="w-full flex flex-row mx-auto max-w-7xl px-2">
              <div className="lg:w-3/12">
                <Sidebars {...props.sidebar} />
              </div>
              <div className="lg:w-9/12">{props.children}</div>
            </div>
          ) : (
            <>{props.children}</>
          )}
        </div>
        {props?.footer ? <Footers {...props?.footer} /> : null}
        <SlideOvers />
      </div>
    </>
  );
}
