"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/subject/frontend/component";
import { Component as SubjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/frontend/component";
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
                            column: "subjectId",
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
                            column: "subjectId",
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
