import { Component as Navbar } from "../../../../navbar/component";
import { Component as Sidebar } from "../../../../sidebar/component";
import { Component as Footer } from "../../../../footer/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-collection-type="layout"
      data-variant={props.variant}
      className={props.className || ""}
    >
      {props.navbar ? (
        <Navbar isServer={props.isServer} {...props.navbar} />
      ) : null}
      <div className="layout-container">
        <div
          className={`w-full flex flex-col ${
            props.sidebar
              ? props.sidebar?.side === "left"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
              : ""
          }`}
        >
          {/* <div
            className={`flex flex-col ${
              props.sidebar?.variant === "one-quarter" ? "lg:w-3/12" : ""
            }`}
          >
            {props.sidebar ? <Sidebar {...props.sidebar} /> : null}
          </div> */}
          <div
            className={`h-full ${
              props.sidebar
                ? props.sidebar?.variant === "one-quarter"
                  ? "lg:w-9/12"
                  : ""
                : ""
            }`}
          >
            {props.children}
          </div>
        </div>
      </div>
      {props.footer ? (
        <Footer isServer={props.isServer} {...props.footer} />
      ) : null}
    </div>
  );
}
