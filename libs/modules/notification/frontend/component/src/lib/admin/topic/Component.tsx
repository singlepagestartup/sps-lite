"use client";

import { Component as ParentComponent } from "@sps/notification/models/topic/frontend/component";
import { Component as TopicsToNotifications } from "@sps/notification/relations/topics-to-notifications/frontend/component";

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
            topicsToNotifications={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <TopicsToNotifications
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "topicId",
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
