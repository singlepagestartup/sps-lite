"use client";

import { Component as ParentComponent } from "@sps/sps-host/models/page/frontend/component";
import { Component as PagesToLayouts } from "@sps/sps-host/relations/pages-to-layouts/frontend/component";
import { Component as PagesToMetadata } from "@sps/sps-host/relations/pages-to-metadata/frontend/component";
import { Component as PagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/frontend/component";

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
            pagesToLayouts={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <PagesToLayouts
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "pageId",
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
            pagesToMetadata={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <PagesToMetadata
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "pageId",
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
                            column: "pageId",
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
