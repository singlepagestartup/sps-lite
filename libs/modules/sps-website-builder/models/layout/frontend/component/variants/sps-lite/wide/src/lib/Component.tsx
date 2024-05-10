import { Component as Navbar } from "@sps/sps-website-builder-models-navbar-frontend-component";
import { Component as Sidebar } from "@sps/sps-website-builder-models-sidebar-frontend-component";
import { Component as Footer } from "@sps/sps-website-builder-models-footer-frontend-component";
import { IComponentPropsExtended } from "./interface";
import { Component as Modal } from "@sps/sps-website-builder-models-modal-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className={props.data.className || "p-2 relative"}
    >
      {/* {props.data.navbar ? (
        <Navbar
          isServer={props.isServer}
          variant={props.data.navbar.variant}
          data={props.data.navbar}
        />
      ) : null} */}
      <div className="layout-container border rounded-lg border-gray-200 p-4 relative">
        <p className="absolute left-2 top-2 text-xs text-gray-400">
          {props.data.variant}
        </p>
        {props.children}
      </div>
      {/* {props.data.footer ? (
        <Footer
          isServer={props.isServer}
          variant={props.data.footer.variant}
          data={props.data.footer}
        />
      ) : null} */}
      {/* <Modal isServer={props.isServer} variant="list" /> */}
    </div>
  );
}
