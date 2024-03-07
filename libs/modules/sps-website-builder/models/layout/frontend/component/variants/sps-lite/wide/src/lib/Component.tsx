import { Component as Navbar } from "@sps/sps-website-builder-models-navbar-frontend-component";
import { Component as Sidebar } from "@sps/sps-website-builder-models-sidebar-frontend-component";
import { Component as Footer } from "@sps/sps-website-builder-models-footer-frontend-component";
import { IComponentPropsExtended } from "./interface";
import { AuthWrapper } from "@sps/sps-rbac-frontend-components";
import { Component as Modal } from "@sps/sps-website-builder-models-modal-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <AuthWrapper>
      <div
        data-module="sps-website-builder"
        data-model="layout"
        data-variant={props.variant}
        className={props.data.className || ""}
      >
        {props.data.navbar ? (
          <Navbar
            isServer={props.isServer}
            variant={props.data.navbar.variant}
            data={props.data.navbar}
          />
        ) : null}
        <div className="layout-container">
          <div
            className={`w-full flex flex-col ${
              props.data.sidebar
                ? props.data.sidebar?.side === "left"
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
                props.data.sidebar
                  ? props.data.sidebar?.variant === "one-quarter"
                    ? "lg:w-9/12"
                    : ""
                  : ""
              }`}
            >
              {props.children}
            </div>
          </div>
        </div>
        {props.data.footer ? (
          <Footer
            isServer={props.isServer}
            variant={props.data.footer.variant}
            data={props.data.footer}
          />
        ) : null}
        <Modal isServer={props.isServer} variant="list" />
      </div>
    </AuthWrapper>
  );
}
