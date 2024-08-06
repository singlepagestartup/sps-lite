"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/authentication/frontend/component";
import { Component as SessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/frontend/component";

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
            sessionsToAuthentications={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SessionsToAuthentications
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "authenticationId",
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
