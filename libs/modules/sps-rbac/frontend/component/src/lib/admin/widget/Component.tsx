"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/widget/frontend/component";
import { Component as WidgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/frontend/component";
import { Component as WidgetsToSubjectsBlocks } from "@sps/sps-rbac/relations/widgets-to-subjects-blocks/frontend/component";
import { Component as WidgetsToIdentitiesBlocks } from "@sps/sps-rbac/relations/widgets-to-identities-blocks/frontend/component";

export function Component() {
  return (
    <ParentComponent
      hostUrl="/"
      isServer={false}
      variant="admin-table"
      adminForm={(props) => {
        return (
          <ParentComponent
            {...props}
            variant="admin-form"
            widgetsToAuthenticationBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToAuthenticationBlocks
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
            widgetsToSubjectsBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToSubjectsBlocks
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
            widgetsToIdentitiesBlocks={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <WidgetsToIdentitiesBlocks
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
