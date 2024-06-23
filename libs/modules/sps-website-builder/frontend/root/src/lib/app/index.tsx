import { IComponentProps } from "./interface";
import { Component as Page } from "@sps/sps-website-builder/models/page/frontend/component/root";
import { Component as Navbar } from "@sps/sps-website-builder/models/navbar/frontend/component/root";
import { Component as Widget } from "@sps/sps-website-builder/models/widget/frontend/component/root";

import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  const parsedProps = JSON.parse(props.props || "{}");
  const model = parsedProps.model || "";
  const variant = parsedProps.variant || "";
  const title = parsedProps.title || "";

  if (model === "widget") {
    return (
      <div
        data-module="sps-website-builder"
        className={cn("w-full flex flex-col", props.className)}
      >
        <Widget
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          query={
            title
              ? {
                  filters: {
                    and: [
                      {
                        column: "title",
                        method: "eq",
                        value: title,
                      },
                    ],
                  },
                }
              : {}
          }
        >
          {({ data: widgets }) => {
            return widgets
              .filter((widget) => widget.variant === variant)
              .map((widget) => {
                return (
                  <Widget
                    key={widget.id}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    data={widget}
                    variant={widget.variant}
                  />
                );
              });
          }}
        </Widget>
      </div>
    );
  } else if (model === "page") {
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
          query={
            title
              ? {
                  filters: {
                    and: [
                      {
                        column: "title",
                        method: "eq",
                        value: title,
                      },
                    ],
                  },
                }
              : {}
          }
        >
          {({ data: navbars }) => {
            if (!navbars.length) {
              return;
            }

            return navbars
              .filter((navbar) => navbar.variant === variant)
              .map((navbar, index) => {
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

  return (
    <div
      data-module="sps-website-builder"
      className={cn("w-full flex flex-col", props.className)}
    >
      <div className="px-2">
        <div className="w-full flex flex-col gap-3 font-bold text-sm p-5 rounded-lg bg-muted text-center">
          <p>Sps Website Builder Module</p>
          <p>Model: {model}</p>
          <p>Variant: {variant}</p>
          <p>Title: {title}</p>
        </div>
      </div>
    </div>
  );
}
