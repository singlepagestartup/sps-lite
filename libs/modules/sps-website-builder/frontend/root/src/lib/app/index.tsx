import { IComponentProps } from "./interface";
import { Component as Page } from "@sps/sps-website-builder/models/page/frontend/component/root";
import { Component as Navbar } from "@sps/sps-website-builder/models/navbar/frontend/component/root";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  const parsedProps = JSON.parse(props.props || "{}");
  const model = parsedProps.model || "";
  const variant = parsedProps.variant || "";

  if (props.variant === "default") {
    if (model === "page") {
      return (
        <div
          data-module="sps-website-builder"
          className={cn("w-full flex", props.className)}
        >
          <Page
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="get-by-url"
            url={props.hostUrl}
          >
            {({ data: page }) => {
              if (!page) {
                return;
              }

              return (
                <Page
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant={page?.variant}
                  data={page}
                />
              );
            }}
          </Page>
        </div>
      );
    } else if (model === "navbar") {
      return (
        <div
          data-module="sps-website-builder"
          className={cn("w-full flex", props.className)}
        >
          <Navbar
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="find"
          >
            {({ data: navbars }) => {
              if (!navbars.length) {
                return;
              }

              return navbars.map((navbar, index) => {
                return (
                  <Navbar
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="default"
                    data={navbar}
                  />
                );
              });
            }}
          </Navbar>
        </div>
      );
    }
  }

  return null;
}
