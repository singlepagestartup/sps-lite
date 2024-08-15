"use client";

import { Component as ParentComponent } from "@sps/website-builder/models/widget/frontend/component";
import { Component as WidgetsToButtonsArrays } from "@sps/website-builder/relations/widgets-to-buttons-arrays/frontend/component";
import { Component as WidgetsToFeatures } from "@sps/website-builder/relations/widgets-to-features/frontend/component";
import { Component as WidgetsToFileStorageWidgets } from "@sps/website-builder/relations/widgets-to-file-storage-module-widgets/frontend/component";
import { Component as WidgetsToLogotypes } from "@sps/website-builder/relations/widgets-to-logotypes/frontend/component";
import { Component as WidgetsToSliders } from "@sps/website-builder/relations/widgets-to-sliders/frontend/component";

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
            widgetsToButtonsArrays={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToButtonsArrays
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
            widgetsToFeatures={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToFeatures
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
            widgetsToFileStorageModuleWidgets={({
              data,
              hostUrl,
              isServer,
            }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToFileStorageWidgets
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
            widgetsToLogotypes={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToLogotypes
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
            widgetsToSliders={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToSliders
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
