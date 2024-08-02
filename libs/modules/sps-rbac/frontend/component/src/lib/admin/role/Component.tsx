"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/role/frontend/component";
import { Component as RolesToActions } from "@sps/sps-rbac/relations/roles-to-actions/frontend/component";
import { Component as SubjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/frontend/component";

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
                            column: "roleId",
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
            subjectsToRoles={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SubjectsToRoles
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "roleId",
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
