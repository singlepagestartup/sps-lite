"use client";

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
        isServer={false}
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
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <Channel
                key={index}
                isServer={false}
                hostUrl={props.hostUrl}
                variant="subscription"
                data={entity}
              />
            );
          });
        }}
      </Channel>
    </div>
  );
}
