"use client";

import { Component as ParentComponent } from "@sps/sps-broadcast/models/channel/frontend/component";
import { Component as ChannelsToMessages } from "@sps/sps-broadcast/relations/channels-to-messages/frontend/component";

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
            channelsToMessages={({ data, hostUrl, isServer }) => {
              if (!data) {
                return;
              }

              return (
                <ChannelsToMessages
                  isServer={isServer}
                  hostUrl={hostUrl}
                  variant="admin-table"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "channelId",
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
