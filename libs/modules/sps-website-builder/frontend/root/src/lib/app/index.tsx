import { IComponentProps } from "./interface";
import { Component as Navbar } from "@sps/sps-website-builder/models/navbar/frontend/component";
import { Component as Widget } from "@sps/sps-website-builder/models/widget/frontend/component";
import { Component as Footer } from "@sps/sps-website-builder/models/footer/frontend/component";
import { Component as NavbarsToWidgets } from "@sps/sps-website-builder/relations/navbars-to-widgets/frontend/component";

import { cn } from "@sps/shared-frontend-client-utils";

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
            if (!widgets?.length) {
              return;
            }

            return widgets
              .filter((widget) => widget.variant === variant)
              .map((widget) => {
                return (
                  <Widget
                    key={widget.id}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    data={widget}
                    variant={widget.variant as any}
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
            return navbars?.map((navbar, index) => {
              return (
                <Navbar
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant={navbar.variant as any}
                  data={navbar}
                >
                  <NavbarsToWidgets
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant="find"
                    apiProps={{
                      params: {
                        filters: {
                          and: [
                            {
                              column: "navbarId",
                              method: "eq",
                              value: navbar.id,
                            },
                          ],
                        },
                      },
                    }}
                  >
                    {({ data }) => {
                      return data?.map((entity, index) => {
                        return (
                          <NavbarsToWidgets
                            key={index}
                            isServer={props.isServer}
                            hostUrl={props.hostUrl}
                            variant={entity.variant as any}
                            data={entity}
                          ></NavbarsToWidgets>
                        );
                      });
                    }}
                  </NavbarsToWidgets>
                </Navbar>
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
            return footers?.map((footer, index) => {
              return (
                <Footer
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant={footer.variant as any}
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
