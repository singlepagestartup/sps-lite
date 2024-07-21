import { IComponentProps } from "./interface";
import { Component as Navbar } from "@sps/sps-website-builder/models/navbar/frontend/component";
import { Component as Widget } from "@sps/sps-website-builder/models/widget/frontend/component";
import { Component as Footer } from "@sps/sps-website-builder/models/footer/frontend/component";
import { Component as WidgetsToHeroSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component";
import { Component as WidgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder/relations/widgets-to-features-section-blocks/frontend/component";

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
                  >
                    <WidgetsToHeroSectionBlocks
                      isServer={props.isServer}
                      hostUrl={props.hostUrl}
                      variant="find"
                      apiProps={{
                        params: {
                          filters: {
                            and: [
                              {
                                column: "widgetId",
                                method: "eq",
                                value: widget.id,
                              },
                            ],
                          },
                        },
                      }}
                    >
                      {({ data }) => {
                        return data?.map((entity, index) => {
                          return (
                            <WidgetsToHeroSectionBlocks
                              key={index}
                              isServer={props.isServer}
                              hostUrl={props.hostUrl}
                              variant={entity.variant as any}
                              data={entity}
                            ></WidgetsToHeroSectionBlocks>
                          );
                        });
                      }}
                    </WidgetsToHeroSectionBlocks>
                    <WidgetsToFeaturesSectionBlocks
                      isServer={props.isServer}
                      hostUrl={props.hostUrl}
                      variant="find"
                      apiProps={{
                        params: {
                          filters: {
                            and: [
                              {
                                column: "widgetId",
                                method: "eq",
                                value: widget.id,
                              },
                            ],
                          },
                        },
                      }}
                    >
                      {({ data }) => {
                        return data?.map((entity, index) => {
                          return (
                            <WidgetsToFeaturesSectionBlocks
                              key={index}
                              isServer={props.isServer}
                              hostUrl={props.hostUrl}
                              variant={entity.variant as any}
                              data={entity}
                            ></WidgetsToFeaturesSectionBlocks>
                          );
                        });
                      }}
                    </WidgetsToFeaturesSectionBlocks>
                  </Widget>
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
            if (!navbars?.length) {
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
                    variant={navbar.variant as any}
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
            if (!footers?.length) {
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
