"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/broadcast/relations/channels-to-messages/sdk/client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { STALE_TIME } from "@sps/shared-utils";
import { globalActionsStore, IAction } from "@sps/shared-frontend-client-store";

export default function Client(props: IComponentProps) {
  const params = useSearchParams();
  const adminQueryParams = params.get("admin");

  const [ping, setPing] = useState<number>(STALE_TIME);

  const { data, isFetching, isLoading, dataUpdatedAt, refetch } = api.find(
    props.apiProps,
  );

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
    if (props.set && typeof props.set === "function") {
      props.set(data);
    }
  }, [data, props]);

  useEffect(() => {
    const triggeredActions: IAction[] = [];
    const mountTime = Date.now();

    globalActionsStore.subscribe((state) => {
      Object.keys(state.stores).forEach((key) => {
        const store = state.stores[key];
        const newStoreActions = store.actions
          .filter((action) => {
            return action.timestamp > mountTime;
          })
          .filter((action) => {
            const isTriggered = triggeredActions.some((triggeredAction) => {
              return JSON.stringify(triggeredAction) === JSON.stringify(action);
            });

            return !isTriggered;
          })
          .filter((action) => {
            return action.type === "mutation";
          });

        if (newStoreActions.length) {
          newStoreActions.forEach((action) => {
            triggeredActions.push(action);
          });

          refetch();
        }
      });
    });
  }, []);

  if (isFetching || isLoading) {
    return <></>;
  }

  if (props.children && data) {
    return props.children({ data });
  }

  return <></>;
}
