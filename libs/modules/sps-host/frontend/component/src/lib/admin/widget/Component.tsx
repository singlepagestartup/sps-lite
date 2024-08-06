"use client";

import { Component as ParentComponent } from "@sps/sps-host/models/widget/frontend/component";
import { Component as PagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/frontend/component";
import { Component as LayoutsToWidgets } from "@sps/sps-host/relations/layouts-to-widgets/frontend/component";
import { Component as WidgetsToExternalWidgets } from "@sps/sps-host/relations/widgets-to-external-widgets/frontend/component";

export function Component() {
  return (
    <ParentComponent
      hostUrl="/"
      isServer={false}
      variant="admin-table"
      adminForm={(props) => {
        return (
          <ParentComponent
            isServer={false}
            hostUrl={props.hostUrl}
            data={props.data}
            variant="admin-form"
            pagesToWidgets={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <PagesToWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "widgetId",
                            method: "eq",
                            value: data.id,
                          },
                        ],
                      },
                    },
                  }}
                />
              );
            }}
            layoutsToWidgets={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <LayoutsToWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "widgetId",
                            method: "eq",
                            value: data.id,
                          },
                        ],
                      },
                    },
                  }}
                />
              );
            }}
            widgetsToExternalModules={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToExternalWidgets
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "widgetId",
                            method: "eq",
                            value: data.id,
                          },
                        ],
                      },
                    },
                  }}
                />
              );
            }}
          />
        );
      }}
    />
  );
}
