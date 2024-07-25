import { IComponentProps } from "./interface";
import { Component as Channel } from "@sps/sps-broadcast/models/channel/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";

export function App(props: IComponentProps) {
  return (
    <div
      data-module="sps-broadcast"
      className={cn("w-full flex", props.className)}
    >
      <Channel
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "title",
                  method: "eq",
                  value: "revalidation",
                },
              ],
            },
          },
        }}
      >
        {({ data: channels }) => {
          if (!channels) {
            return;
          }

          return channels.map((channel, index) => {
            return (
              <Channel
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="subscription"
                data={channel}
              />
            );
          });
        }}
      </Channel>
    </div>
  );
}
