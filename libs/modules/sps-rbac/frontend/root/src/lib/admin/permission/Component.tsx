"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/permission/frontend/component";
import { Component as RolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/frontend/component";

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
            rolesToPermissions={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <RolesToPermissions
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "permissionId",
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
