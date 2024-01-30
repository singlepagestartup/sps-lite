import { useRef } from "react";
import { ILayout } from "../..";
import { Entity as Topbar } from "../../../../topbar/component";
import { Entity as Navbar } from "../../../../navbar/component";
import { Entity as Sidebar } from "../../../../sidebar/component";
import { Entity as Footer } from "../../../../footer/component";

export default function Boxed(props: ILayout) {
  const topbarRef = useRef<any>(null);

  return (
    <div
      data-collection-type="layout"
      data-variant={props.variant}
      className={props.className || ""}
    >
      {props?.topbar ? (
        <Topbar {...props.topbar} topbarRef={topbarRef} page={props.page} />
      ) : null}
      {props?.navbar ? (
        <Navbar
          {...props?.navbar}
          page={props.page}
          topbar={props?.topbar}
          topbarRef={topbarRef}
        />
      ) : null}
      <div className={"layout-container"}>
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
              <Sidebar {...props.sidebar} page={props.page} />
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
      {props?.footer ? <Footer {...props?.footer} page={props.page} /> : null}
    </div>
  );
}
