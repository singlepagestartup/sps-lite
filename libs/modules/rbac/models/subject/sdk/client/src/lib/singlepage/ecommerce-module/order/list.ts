"use client";

import { route, clientHost } from "@sps/rbac/models/subject/sdk/model";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { globalActionsStore } from "@sps/shared-frontend-client-store";
import { createId } from "@paralleldrive/cuid2";
import {
  api,
  type IProps as IParentProps,
  type IResult as IParentResult,
} from "@sps/rbac/models/subject/sdk/server";
import { saturateHeaders } from "@sps/shared-frontend-client-utils";
import { queryClient, subscription } from "@sps/shared-frontend-client-api";
import { useEffect } from "react";

export type IProps = IParentProps["IEcommerceModuleOrderListProps"] & {
  reactQueryOptions?: Partial<UseQueryOptions<any>>;
  mute?: boolean;
};

export type IResult = IParentResult["IEcommerceModuleOrderListResult"];

export function action(props: IProps) {
  const queryKey = `${route}/${props.id}/ecommerce-module/orders`;
  // Preserve order invalidation while accepting additional caller topics.
  const { meta: userMeta, ...restReactQueryOptions } =
    props.reactQueryOptions ?? {};

  useEffect(() => {
    const unsubscribe = subscription(queryKey, queryClient);
    return unsubscribe;
  }, [queryKey]);

  return useQuery<IResult>({
    queryKey: props.params ? [queryKey, props.params] : [queryKey],
    // Canonical realtime subscription (issue #195): hand-written SDK
    // queries MUST declare meta.topics — the topic branch disables the
    // legacy route fallback whenever any topic subscriber matches, so a
    // topic-less query would never be invalidated (cart badge bug).
    // Aggregates over orders subscribe to the orders collection topic.
    meta: {
      ...(userMeta ?? {}),
      topics: Array.from(
        new Set([
          "ecommerce.orders",
          ...((userMeta?.topics as string[] | undefined) ?? []),
        ]),
      ),
    },
    queryFn: async () => {
      const result = await api.ecommerceModuleOrderList({
        ...props,
        options: {
          ...props.options,
          headers: saturateHeaders(props.options?.headers),
        },
        host: clientHost,
      });

      return result;
    },
    select(data) {
      globalActionsStore.getState().addAction({
        type: "query",
        name: `${route}/${props.id}/ecommerce-module/orders`,
        props: this,
        result: data,
        timestamp: Date.now(),
        requestId: createId(),
      });

      return data;
    },
    staleTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    ...restReactQueryOptions,
  });
}
