import Topbars from "~components/topbars";
import { ISpsLiteLayout } from ".";
import Sidebars from "~components/sidebars";
import Navbars from "~components/navbars";
import Footers from "~components/footers";
import { useRef } from "react";

export default function Wide(props: ISpsLiteLayout) {
  const topbarRef = useRef<any>(null);

  return (
    <>
      <div
        data-collection-type="layout"
        data-variant={props.variant}
        className={props.className || ""}
      >
        {props?.topbar ? (
          <Topbars {...props.topbar} topbarRef={topbarRef} />
        ) : null}
        {props?.navbar ? (
          <Navbars
            {...props?.navbar}
            topbar={props?.topbar}
            topbarRef={topbarRef}
          />
        ) : null}
        <div className="layout-container">
          {props?.sidebar ? (
            <div
              className={`w-full flex flex-col ${
                props.sidebar.side === "left"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              <div
                className={`flex flex-col ${
                  props.sidebar.variant === "one-quarter" ? "lg:w-3/12" : ""
                }`}
              >
                <Sidebars {...props.sidebar} />
              </div>
              <div
                className={`h-full ${
                  props.sidebar.variant === "one-quarter" ? "lg:w-9/12" : ""
                }`}
              >
                {props.children}
              </div>
            </div>
          ) : (
            <>{props.children}</>
          )}
        </div>
        {props?.footer ? <Footers {...props?.footer} /> : null}
      </div>
    </>
  );
}
