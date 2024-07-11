"use client";

import { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { api } from "@sps/sps-broadcast/models/channel/frontend/api/client";
import { useSearchParams } from "next/navigation";
import { Component as ChannelsToMessages } from "@sps/sps-broadcast/relations/channels-to-messages/frontend/component/root";
import { STALE_TIME } from "@sps/shared-utils";

export function Component(props: IComponentPropsExtended) {
  const params = useSearchParams();
  const adminQueryParams = params.get("admin");

  const [ping, setPing] = useState<number>(STALE_TIME);

  const { data, dataUpdatedAt, refetch } = api.findById({ id: props.data.id });

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      refetch();
      clearTimeout(refreshTimeout);
    }, ping);

    return () => {
      clearTimeout(refreshTimeout);
    };
  }, [dataUpdatedAt]);

  useEffect(() => {
    if (!adminQueryParams) {
      return;
    }

    setPing(1000);
  }, [adminQueryParams]);

  return (
    <div
      data-module="sps-broadcast"
      data-model="channel"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("flex-col gap-2 mx-auto w-full border hidden")}
    >
      {data?.channelsToMessages.map((entity, index) => {
        return (
          <ChannelsToMessages
            key={index}
            hostUrl={props.hostUrl}
            isServer={false}
            data={entity}
            variant="default"
          />
        );
      })}
    </div>
  );
}
