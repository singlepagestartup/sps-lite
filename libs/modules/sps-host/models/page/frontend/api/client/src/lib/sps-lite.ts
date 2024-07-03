"use client";

import {
  IModelExtended,
  route,
  host,
} from "@sps/sps-host/models/page/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
import {
  NextRequestOptions,
  STALE_TIME,
  transformResponseItem,
} from "@sps/shared-utils";
import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
import { globalActionsStore } from "@sps/shared-frontend-client-store";
import { createId } from "@paralleldrive/cuid2";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export interface IFindByUrlProps {
  url: string;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export interface IUrlSegmentValueProps {
  url: string;
  segment: string;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export const api = {
  ...factory<IModelExtended>({
    queryClient,
    route,
    host,
  }),
  findByUrl: (props: IFindByUrlProps) => {
    return useQuery<IModelExtended>({
      queryKey: [`${route}/find-by-url`],
      queryFn: async () => {
        const { url } = props;

        const stringifiedQuery = QueryString.stringify(
          { ...props?.params, url },
          {
            encodeValuesOnly: true,
          },
        );

        const requestOptions: NextRequestOptions = {
          credentials: "include",
          ...props?.options,
          next: {
            ...props?.options?.next,
          },
        };

        const res = await fetch(
          `${host}${route}/find-by-url?${stringifiedQuery}`,
          requestOptions,
        );

        if (!res.ok) {
          const error = new Error(res.statusText);

          throw new Error(error.message || "Failed to fetch data");
        }

        const json = await res.json();

        if (json.error) {
          throw new Error(json.error.message || "Failed to fetch data");
        }

        const transformedData = transformResponseItem<IModelExtended>(json);

        return transformedData;
      },
      select(data) {
        const state = globalActionsStore.getState();

        if (!state.stores[`${route}/find-by-url`]) {
          globalActionsStore
            .getState()
            .addStore({ name: `${route}/find-by-url`, actions: [] });
        }

        globalActionsStore.getState().addAction({
          type: "find-by-url",
          module: `${route}/find-by-url`,
          meta: this,
          payload: data,
          timestamp: Date.now(),
          id: createId(),
        });

        return data;
      },
      staleTime: STALE_TIME,
    });
  },
  urlSegmentValue: (props: IUrlSegmentValueProps) => {
    return useQuery<string>({
      queryKey: [`${route}/url-segment-value`],
      queryFn: async () => {
        const { url, segment } = props;

        const stringifiedQuery = QueryString.stringify(
          { ...props?.params, url, segment },
          {
            encodeValuesOnly: true,
          },
        );

        const requestOptions: NextRequestOptions = {
          credentials: "include",
          ...props?.options,
          next: {
            ...props?.options?.next,
          },
        };

        const res = await fetch(
          `${host}${route}/url-segment-value?${stringifiedQuery}`,
          requestOptions,
        );

        if (!res.ok) {
          const error = new Error(res.statusText);

          throw new Error(error.message || "Failed to fetch data");
        }

        const json = await res.json();

        if (json.error) {
          throw new Error(json.error.message || "Failed to fetch data");
        }

        const transformedData = transformResponseItem<string>(json);

        return transformedData;
      },
      select(data) {
        const state = globalActionsStore.getState();

        if (!state.stores[`${route}/url-segment-value`]) {
          globalActionsStore
            .getState()
            .addStore({ name: `${route}/url-segment-value`, actions: [] });
        }

        globalActionsStore.getState().addAction({
          type: "url-segment-value",
          module: `${route}/url-segment-value`,
          meta: this,
          payload: data,
          timestamp: Date.now(),
          id: createId(),
        });

        return data;
      },
      staleTime: STALE_TIME,
    });
  },
};
