"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/policy/frontend/component";
import { Component as RolesToPolicies } from "@sps/sps-rbac/relations/roles-to-policies/frontend/component";

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
            rolesToPolicies={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <RolesToPolicies
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "policyId",
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
