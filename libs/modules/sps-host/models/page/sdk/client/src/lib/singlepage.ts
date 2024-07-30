"use client";

import {
  IModel,
  route,
  host,
  query,
  options,
} from "@sps/sps-host/models/page/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
import {
  NextRequestOptions,
  responsePipe,
  STALE_TIME,
  transformResponseItem,
} from "@sps/shared-utils";
import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
import { globalActionsStore } from "@sps/shared-frontend-client-store";
import { createId } from "@paralleldrive/cuid2";
import { toast } from "sonner";
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
  ...factory<IModel>({
    queryClient,
    route,
    host,
    params: query,
    options,
  }),
  findByUrl: (props: IFindByUrlProps) => {
    return useQuery<IModel>({
      queryKey: [`${route}/find-by-url`],
      queryFn: async () => {
        try {
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

          const json = await responsePipe<{ data: IModel }>({
            res,
          });

          const transformedData = transformResponseItem<IModel>(json);

          return transformedData;
        } catch (error: any) {
          toast.error(error.message);

          throw error;
        }
      },
      select(data) {
        globalActionsStore.getState().addAction({
          type: "find-by-url",
          name: `${route}/find-by-url`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
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
        try {
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

          const json = await responsePipe<{ data: string }>({
            res,
          });

          const transformedData = transformResponseItem<string>(json);

          return transformedData;
        } catch (error: any) {
          toast.error(error.message);

          throw error;
        }
      },
      select(data) {
        globalActionsStore.getState().addAction({
          type: "url-segment-value",
          name: `${route}/url-segment-value`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
        });

        return data;
      },
      staleTime: STALE_TIME,
    });
  },
};
