"use client";

import {
  query as findByIdQuery,
  IQueryProps as IFindByIdQueryProps,
} from "./queries/find-by-id";
import {
  query as findQuery,
  IQueryProps as IFindQueryProps,
} from "./queries/find";
import {
  mutation as createMutation,
  IMutationProps as ICreateMutationProps,
  IMutationFunctionProps as ICreateMutationFunctionProps,
} from "./mutations/create";
import {
  mutation as updateMutation,
  IMutationProps as IUpdateMutationProps,
  IMutationFunctionProps as IUpdateMutationFunctionProps,
} from "./mutations/update";
import {
  mutation as deleteMutation,
  IMutationProps as IDeleteMutationProps,
  IMutationFunctionProps as IDeleteMutationFunctionProps,
} from "./mutations/delete";
import {
  DefaultError,
  QueryClient,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { globalActionsStore } from "@sps/shared-frontend-client-store";
import { STALE_TIME } from "@sps/shared-utils";
import { createId } from "@paralleldrive/cuid2";

export interface IFactoryProps {
  route: string;
  host: string;
  queryClient: QueryClient;
  staleTime?: number;
}

export function factory<T>(factoryProps: IFactoryProps) {
  const api = {
    findById: (props: {
      id?: IFindByIdQueryProps["id"];
      params?: IFindByIdQueryProps["params"];
      options?: IFindByIdQueryProps["options"];
    }) => {
      return useQuery<T>({
        queryKey: props.id ? [`${factoryProps.route}/${props.id}`] : [],
        queryFn: props.id
          ? findByIdQuery({ ...factoryProps, ...props, id: props.id })
          : undefined,
        select(data) {
          addToGlobalStore({
            name: factoryProps.route,
            type: "findById",
            payload: data,
            options: this,
          });

          return data;
        },
        enabled: props.id ? true : false,
        staleTime:
          factoryProps.staleTime !== undefined
            ? factoryProps.staleTime
            : STALE_TIME,
      });
    },
    find: (props?: {
      params?: IFindQueryProps["params"];
      options?: IFindQueryProps["options"];
    }) => {
      return useQuery<T[]>({
        queryKey: [`${factoryProps.route}`],
        queryFn: findQuery({ ...factoryProps, ...props }),
        select(data) {
          addToGlobalStore({
            name: factoryProps.route,
            type: "find",
            payload: data,
            options: this,
          });

          return data;
        },
        staleTime:
          factoryProps.staleTime !== undefined
            ? factoryProps.staleTime
            : STALE_TIME,
      });
    },
    create: (props?: {
      params?: ICreateMutationProps["params"];
      options?: ICreateMutationProps["options"];
    }) => {
      return useMutation<T, DefaultError, ICreateMutationFunctionProps>({
        mutationKey: [`${factoryProps.route}`],
        mutationFn: (mutationFunctionProps: ICreateMutationFunctionProps) => {
          return createMutation<T>({
            ...factoryProps,
            ...props,
          })(mutationFunctionProps);
        },
        onSuccess(data) {
          addToGlobalStore({
            name: factoryProps.route,
            type: "create",
            payload: data,
            options: this,
          });

          return data;
        },
      });
    },
    update: (props?: {
      id?: IUpdateMutationProps["id"];
      params?: IUpdateMutationProps["params"];
      options?: IUpdateMutationProps["options"];
    }) => {
      return useMutation<T, DefaultError, IUpdateMutationFunctionProps>({
        mutationKey: props?.id
          ? [`${factoryProps.route}/${props.id}`]
          : [`${factoryProps.route}`],
        mutationFn: (mutationFunctionProps: IUpdateMutationFunctionProps) => {
          return updateMutation<T>({
            ...factoryProps,
            ...props,
          })(mutationFunctionProps);
        },
        onSuccess(data) {
          addToGlobalStore({
            name: factoryProps.route,
            type: "update",
            payload: data,
            options: this,
          });

          return data;
        },
      });
    },
    delete: (props?: {
      id?: IDeleteMutationProps["id"];
      params?: IDeleteMutationProps["params"];
      options?: IDeleteMutationProps["options"];
    }) => {
      return useMutation<T, DefaultError, IDeleteMutationFunctionProps>({
        mutationKey: props?.id
          ? [`${factoryProps.route}/${props.id}`]
          : [`${factoryProps.route}`],
        mutationFn: (mutationFunctionProps: IDeleteMutationFunctionProps) => {
          return deleteMutation<T>({
            ...factoryProps,
            ...props,
          })(mutationFunctionProps);
        },
        onSuccess(data) {
          addToGlobalStore({
            name: factoryProps.route,
            type: "delete",
            payload: data,
            options: this,
          });

          return data;
        },
      });
    },
  };

  return api;
}

function addToGlobalStore(props: {
  name: string;
  type: string;
  payload: any;
  options:
    | UseMutationOptions<any, any, any, any>
    | UseQueryOptions<any, any, any, any>;
}) {
  const state = globalActionsStore.getState();

  if (!state.stores[props.name]) {
    globalActionsStore.getState().addStore({ name: props.name, actions: [] });
  }

  globalActionsStore.getState().addAction({
    type: props.type,
    module: props.name,
    meta: props.options,
    payload: props.payload,
    timestamp: Date.now(),
    id: createId(),
  });
}
