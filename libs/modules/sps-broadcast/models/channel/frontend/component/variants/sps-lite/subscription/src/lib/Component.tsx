"use client";

import { useEffect, useMemo, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";
import { api } from "@sps/sps-broadcast/models/channel/frontend/api/client";
import { api as messageApi } from "@sps/sps-broadcast/models/message/frontend/api/server";
import { IModel as IMessage } from "@sps/sps-broadcast/models/message/contracts/extended";
// import { Button } from "@sps/shared-ui-shadcn";
import { useGlobalActionsStore } from "@sps/shared-frontend-client-store";
import { useSearchParams } from "next/navigation";
import { STALE_TIME } from "@sps/shared-utils";

export function Component(props: IComponentPropsExtended) {
  const params = useSearchParams();
  const adminQueryParams = params.get("admin");

  const [ping, setPing] = useState<number>(STALE_TIME);

  const mountedAt = useMemo(() => {
    return new Date(new Date().toISOString()).getTime();
  }, []);
  const addRevalidationQueueItem = useGlobalActionsStore(
    (state) => state.addRevalidationQueueItem,
  );

  const [passedMessages, setPassedMessages] = useState<IMessage[]>([]);
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

  useEffect(() => {
    data?.channelsToMessages.forEach((channelToMessage) => {
      const createdAt = new Date(channelToMessage.createdAt).getTime();

      if (createdAt < mountedAt) {
        return;
      }

      messageApi
        .findById({ id: channelToMessage.messageId })
        .then((message) => {
          const exists = passedMessages.find((passedMessage) => {
            if (passedMessage.id === message.id) {
              return true;
            }

            return false;
          });

          if (exists) {
            return;
          }

          setPassedMessages((prev) => [...prev, message]);
        });
    });
  }, [dataUpdatedAt]);

  useEffect(() => {
    passedMessages.forEach((message) => {
      const tags = [message.payload];

      addRevalidationQueueItem({
        tags,
        timestamp: new Date().getTime(),
      });
    });
  }, [passedMessages]);

  return (
    <div
      data-module="sps-broadcast"
      data-model="channel"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("hidden")}
    >
      {/* <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={() => {
              refetch();
            }}
          >
            Refresh channel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              setPassedMessages([]);
            }}
          >
            Clear messages
          </Button>
        </div>
      </div> */}
    </div>
  );
}
