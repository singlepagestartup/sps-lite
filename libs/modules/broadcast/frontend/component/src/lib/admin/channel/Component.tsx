"use client";

import { Component as ParentComponent } from "@sps/broadcast/models/channel/frontend/component";
import { Component as ChannelsToMessages } from "@sps/broadcast/relations/channels-to-messages/frontend/component";

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
