import { Component as Navbar } from "../../../../../navbar/component";
import { Component as Footer } from "../../../../../footer/component";
import { Component as Sidebar } from "../../../../../sidebar/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-collection-type="layout"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      {props.data?.navbar ? (
        <Navbar
          isServer={props.isServer}
          variant={props.data.navbar.variant}
          data={props.data.navbar}
        />
      ) : null}
      <div className={"layout-container"}>
        {props.data?.sidebar ? (
          <div
            className={`w-full flex flex-col ${
              props.data.sidebar.side === "left"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }`}
          >
            <div
              className={`flex flex-col ${
                props.data.sidebar.variant === "one-quarter" ? "lg:w-3/12" : ""
              }`}
            >
              <Sidebar
                isServer={props.isServer}
                variant={props.data.sidebar.variant}
                data={props.data.sidebar}
              />
            </div>
            <div
              className={`h-full ${
                props.data.sidebar.variant === "one-quarter" ? "lg:w-9/12" : ""
              }`}
            >
              {props.children}
            </div>
          </div>
        ) : (
          <>{props.children}</>
        )}
      </div>
      {props.data.footer ? (
        <Footer
          isServer={props.isServer}
          variant={props.data.footer.variant}
          data={props.data.footer}
        />
      ) : null}
    </div>
  );
}