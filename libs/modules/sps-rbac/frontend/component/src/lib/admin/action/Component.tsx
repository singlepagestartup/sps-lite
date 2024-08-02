"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/action/frontend/component";
import { Component as RolesToActions } from "@sps/sps-rbac/relations/roles-to-actions/frontend/component";

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
            rolesToActions={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <RolesToActions
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "actionId",
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
