"use client";

import {
  IModel,
  route,
  host,
  query,
  options,
} from "@sps/sps-rbac/models/authentication/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import {
  NextRequestOptions,
  prepareFormDataToSend,
  STALE_TIME,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";
import { globalActionsStore } from "@sps/shared-frontend-client-store";
import { createId } from "@paralleldrive/cuid2";
import { toast } from "sonner";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";

export interface ILoginAndPasswordMutationFunctionProps {
  data: {
    login: string;
    password: string;
  };
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export interface IRefreshMutationFunctionProps {
  data: {
    refresh: string;
  };
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export interface ILogoutMutationFunctionProps {
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export interface IIsAuthorizedProps {
  params: {
    action: {
      route: string;
      method: string;
      type?: "HTTP";
    };
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
  loginAndPassword: (props?: {
    type?: "authentication" | "registration";
    params?: {
      [key: string]: any;
    };
    options?: NextRequestOptions;
    reactQueryOptions?: any;
  }) => {
    return useMutation<
      { jwt: string; refresh: string },
      DefaultError,
      ILoginAndPasswordMutationFunctionProps
    >({
      mutationKey: [
        `${route}/${props?.type ?? "authentication"}/login-and-password`,
      ],
      mutationFn: async (
        mutationFunctionProps: ILoginAndPasswordMutationFunctionProps,
      ) => {
        try {
          const { data } = mutationFunctionProps;

          const formData = prepareFormDataToSend({ data });

          const stringifiedQuery = QueryString.stringify(
            mutationFunctionProps.params || props?.params,
            {
              encodeValuesOnly: true,
            },
          );

          const requestOptions: NextRequestOptions = {
            credentials: "include",
            method: "POST",
            body: formData,
            ...(mutationFunctionProps.options || props?.options),
            next: {
              ...(mutationFunctionProps.options?.next || props?.options?.next),
            },
          };
          const res = await fetch(
            `${host}${route}/${props?.type ?? "authentication"}/login-and-password?${stringifiedQuery}`,
            requestOptions,
          );

          const json = await responsePipe<{
            data: {
              jwt: string;
              refresh: string;
            };
          }>({
            res,
          });

          const transformedData = transformResponseItem<{
            jwt: string;
            refresh: string;
          }>(json);

          localStorage.setItem(
            "sps-rbac.authentication.refresh",
            transformedData.refresh,
          );

          return transformedData;
        } catch (error: any) {
          toast.error(error.message);

          throw error;
        }
      },
      onSuccess(data) {
        globalActionsStore.getState().addAction({
          type: "authentication.loginAndPassword",
          name: `${route}/${props?.type ?? "authentication"}/login-and-password`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
        });

        return data;
      },
      ...props?.reactQueryOptions,
    });
  },
  refresh: (props?: {
    params?: {
      [key: string]: any;
    };
    options?: NextRequestOptions;
    reactQueryOptions?: any;
  }) => {
    return useMutation<
      { jwt: string; refresh: string },
      DefaultError,
      IRefreshMutationFunctionProps
    >({
      mutationKey: [`${route}/authentication/refresh`],
      mutationFn: async (
        mutationFunctionProps: IRefreshMutationFunctionProps,
      ) => {
        try {
          const { data } = mutationFunctionProps;

          const formData = prepareFormDataToSend({ data });

          const stringifiedQuery = QueryString.stringify(
            mutationFunctionProps.params || props?.params,
            {
              encodeValuesOnly: true,
            },
          );

          const requestOptions: NextRequestOptions = {
            credentials: "include",
            method: "POST",
            body: formData,
            ...(mutationFunctionProps.options || props?.options),
            next: {
              ...(mutationFunctionProps.options?.next || props?.options?.next),
            },
          };
          const res = await fetch(
            `${host}${route}/authentication/refresh?${stringifiedQuery}`,
            requestOptions,
          );

          const json = await responsePipe<{
            data: {
              jwt: string;
              refresh: string;
            };
          }>({
            res,
          });

          const transformedData = transformResponseItem<{
            jwt: string;
            refresh: string;
          }>(json);

          localStorage.setItem(
            "sps-rbac.authentication.refresh",
            transformedData.refresh,
          );

          return transformedData;
        } catch (error: any) {
          toast.error(error.message);

          throw error;
        }
      },
      onSuccess(data) {
        globalActionsStore.getState().addAction({
          type: "authentication.refresh",
          name: `${route}/authentication/refresh`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
        });

        return data;
      },
      ...props?.reactQueryOptions,
    });
  },
  logout: (props?: {
    params?: {
      [key: string]: any;
    };
    options?: NextRequestOptions;
    reactQueryOptions?: any;
  }) => {
    return useQuery<IModel>({
      queryKey: [`${route}/logout`],
      queryFn: async () => {
        try {
          const stringifiedQuery = QueryString.stringify(props?.params, {
            encodeValuesOnly: true,
          });

          const requestOptions: NextRequestOptions = {
            credentials: "include",
            ...options,
            cache: "no-cache",
            next: {
              ...options?.next,
              cache: "no-store",
            },
          };

          const res = await fetch(
            `${host}${route}/logout?${stringifiedQuery}`,
            requestOptions,
          );

          const json = await responsePipe<{ data: IModel }>({
            res,
          });

          const transformedData = transformResponseItem<IModel>(json);

          localStorage.removeItem("sps-rbac.authentication.refresh");

          return transformedData;
        } catch (error: any) {
          toast.error(error.message);

          throw error;
        }
      },
      select(data) {
        globalActionsStore.getState().addAction({
          type: "logout",
          name: `${route}/logout`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
        });

        return data;
      },
      staleTime: STALE_TIME,
      ...props?.reactQueryOptions,
    });
  },
  isAuthorized: (props: {
    params: IIsAuthorizedProps["params"];
    options?: IIsAuthorizedProps["options"];
    reactQueryOptions?: any;
  }) => {
    return useQuery<IModel>({
      queryKey: [`${route}/is-authorized`],
      queryFn: async () => {
        try {
          const stringifiedQuery = QueryString.stringify(props?.params, {
            encodeValuesOnly: true,
          });

          const requestOptions: NextRequestOptions = {
            credentials: "include",
            ...options,
            next: {
              ...options?.next,
            },
          };

          const res = await fetch(
            `${host}${route}/is-authorized?${stringifiedQuery}`,
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
          type: "is-authorized",
          name: `${route}/is-authorized`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
        });

        return data;
      },
      staleTime: STALE_TIME,
      ...props.reactQueryOptions,
    });
  },
};
