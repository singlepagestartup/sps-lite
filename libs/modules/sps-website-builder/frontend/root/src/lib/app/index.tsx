import { IComponentProps } from "./interface";
import { Component as Navbar } from "@sps/sps-website-builder/models/navbar/frontend/component/root";
import { Component as Widget } from "@sps/sps-website-builder/models/widget/frontend/component/root";
import { Component as Footer } from "@sps/sps-website-builder/models/footer/frontend/component/root";

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
          apiProps={
            title
              ? {
                  params: {
                    filters: {
                      and: [
                        {
                          column: "title",
                          method: "eq",
                          value: title,
                        },
                      ],
                    },
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
          apiProps={
            title
              ? {
                  params: {
                    filters: {
                      and: [
                        {
                          column: "title",
                          method: "eq",
                          value: title,
                        },
                      ],
                    },
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
                    variant={navbar.variant}
                    data={navbar}
                  />
                );
              });
          }}
        </Navbar>
      </div>
    );
  } else if (model === "footer") {
    return (
      <div
        data-module="sps-website-builder"
        className={cn("w-full flex", props.className)}
      >
        <Footer
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          apiProps={
            title
              ? {
                  params: {
                    filters: {
                      and: [
                        {
                          column: "title",
                          method: "eq",
                          value: title,
                        },
                      ],
                    },
                  },
                }
              : {}
          }
        >
          {({ data: footers }) => {
            if (!footers.length) {
              return;
            }

            return footers
              .filter((footer) => footer.variant === variant)
              .map((footer, index) => {
                return (
                  <Footer
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant={footer.variant}
                    data={footer}
                  />
                );
              });
          }}
        </Footer>
      </div>
    );
  }

  return;
}
