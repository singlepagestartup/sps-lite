"use client";

import {
  IModelExtended,
  route,
  host,
  query,
  options,
} from "@sps/sps-rbac/models/authentication/frontend/api/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import {
  NextRequestOptions,
  prepareFormDataToSend,
  STALE_TIME,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";
import { globalActionsStore } from "@sps/shared-frontend-client-store";
import { createId } from "@paralleldrive/cuid2";
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

export interface ILogoutMutationFunctionProps {
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
}

export interface IIsAuthenticatedProps {
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
    params: query,
    options,
  }),
  loginAndPassword: (props?: {
    params?: {
      [key: string]: any;
    };
    options?: NextRequestOptions;
  }) => {
    return useMutation<
      IModelExtended,
      DefaultError,
      ILoginAndPasswordMutationFunctionProps
    >({
      mutationKey: [`${route}/providers/login-and-password`],
      mutationFn: async (
        mutationFunctionProps: ILoginAndPasswordMutationFunctionProps,
      ) => {
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
          `${host}${route}/providers/login-and-password?${stringifiedQuery}`,
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
      onSuccess(data) {
        globalActionsStore.getState().addAction({
          type: "providers.loginAndPassword",
          name: `${route}/providers/login-and-password`,
          props: this,
          result: data,
          timestamp: Date.now(),
          requestId: createId(),
        });

        return data;
      },
    });
  },
  logout: (props?: {
    params?: {
      [key: string]: any;
    };
    options?: NextRequestOptions;
  }) => {
    return useMutation<
      IModelExtended,
      DefaultError,
      ILogoutMutationFunctionProps
    >({
      mutationKey: [`${route}/logout`],
      mutationFn: async (
        mutationFunctionProps?: ILogoutMutationFunctionProps,
      ) => {
        const formData = prepareFormDataToSend({ data: {} });

        const stringifiedQuery = QueryString.stringify(
          mutationFunctionProps?.params || props?.params,
          {
            encodeValuesOnly: true,
          },
        );

        const requestOptions: NextRequestOptions = {
          credentials: "include",
          method: "POST",
          body: formData,
          ...(mutationFunctionProps?.options || props?.options),
          next: {
            ...(mutationFunctionProps?.options?.next || props?.options?.next),
          },
        };
        const res = await fetch(
          `${host}${route}/logout?${stringifiedQuery}`,
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
      onSuccess(data) {
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
    });
  },
  isAuthenticated: (props?: {
    params?: IIsAuthenticatedProps["params"];
    options?: IIsAuthenticatedProps["options"];
  }) => {
    return useQuery<IModelExtended>({
      queryKey: [`${route}/is-authenticatated`],
      queryFn: async () => {
        const stringifiedQuery = QueryString.stringify(props?.params, {
          encodeValuesOnly: true,
        });

        const requestOptions: NextRequestOptions = {
          credentials: "include",
          ...props?.options,
          next: {
            ...props?.options?.next,
          },
        };

        const res = await fetch(
          `${host}${route}?${stringifiedQuery}`,
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
        globalActionsStore.getState().addAction({
          type: "is-authenticatated",
          name: `${route}/is-authenticatated`,
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
