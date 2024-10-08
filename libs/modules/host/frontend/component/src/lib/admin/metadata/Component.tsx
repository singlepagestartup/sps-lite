"use client";

import { Component as ParentComponent } from "@sps/host/models/metadata/frontend/component";
import { Component as PagesToMetadata } from "@sps/host/relations/pages-to-metadata/frontend/component";

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
                            column: "metadataId",
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
