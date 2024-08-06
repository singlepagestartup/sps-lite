"use client";

import { Component as ParentComponent } from "@sps/sps-rbac/models/session/frontend/component";
import { Component as SessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/frontend/component";
import { Component as SubjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/frontend/component";

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
                            column: "sessionId",
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
            subjectsToSessions={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <SubjectsToSessions
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "sessionId",
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
