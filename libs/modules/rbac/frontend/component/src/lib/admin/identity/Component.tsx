"use client";

import { Component as ParentComponent } from "@sps/rbac/models/identity/frontend/component";
import { Component as SubjectsToIdentities } from "@sps/rbac/relations/subjects-to-identities/frontend/component";

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
            subjectsToIdentities={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SubjectsToIdentities
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "identityId",
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
