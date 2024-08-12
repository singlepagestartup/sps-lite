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
  useQuery,
} from "@tanstack/react-query";
import { globalActionsStore, IAction } from "@sps/shared-frontend-client-store";
import { STALE_TIME } from "@sps/shared-utils";
import { createId } from "@paralleldrive/cuid2";
import QueryString from "qs";

export interface IFactoryProps<T> {
  route: string;
  host: string;
  queryClient: QueryClient;
  staleTime?: number;
  params?:
    | IFindByIdQueryProps<T>["params"]
    | IFindQueryProps<T>["params"]
    | IUpdateMutationProps<T>["params"]
    | ICreateMutationProps<T>["params"]
    | IDeleteMutationProps<T>["params"];
  options?:
    | IFindByIdQueryProps<T>["options"]
    | IFindQueryProps<T>["options"]
    | IUpdateMutationProps<T>["options"]
    | ICreateMutationProps<T>["options"]
    | IDeleteMutationProps<T>["options"];
}

type SetRequestId = (requestId: string) => void;

export function factory<T>(factoryProps: IFactoryProps<T>) {
  const api = {
    findById: (props: {
      id?: IFindByIdQueryProps<T>["id"];
      params?: IFindByIdQueryProps<T>["params"];
      options?: IFindByIdQueryProps<T>["options"];
      reactQueryOptions?: any;
    }) => {
      return useQuery<T | undefined>({
        queryKey: props.id
          ? [
              `${factoryProps.route}/${props.id}`,
              props?.params
                ? QueryString.stringify(props.params, {
                    encodeValuesOnly: true,
                  })
                : undefined,
            ]
          : [],
        queryFn: props.id
          ? findByIdQuery({
              ...factoryProps,
              id: props.id,
              cb: (data) => {
                addToGlobalStore({
                  name: factoryProps.route,
                  type: "findById",
                  result: data,
                  props,
                });
              },
              ...props,
            })
          : undefined,
        enabled: props.id ? true : false,
        staleTime:
          factoryProps.staleTime !== undefined
            ? factoryProps.staleTime
            : STALE_TIME,
        ...props?.reactQueryOptions,
      });
    },
    find: (props?: {
      params?: IFindQueryProps<T>["params"];
      options?: IFindQueryProps<T>["options"];
      reactQueryOptions?: any;
    }) => {
      return useQuery<T[] | undefined>({
        queryKey: [
          `${factoryProps.route}`,
          props?.params
            ? QueryString.stringify(props.params, {
                encodeValuesOnly: true,
              })
            : undefined,
        ],
        queryFn: findQuery({
          ...factoryProps,
          cb: (data) => {
            addToGlobalStore({
              name: factoryProps.route,
              type: "find",
              result: data,
              props,
            });
          },
          ...props,
        }),
        staleTime:
          factoryProps.staleTime !== undefined
            ? factoryProps.staleTime
            : STALE_TIME,
        ...props?.reactQueryOptions,
      });
    },
    create: (props?: {
      params?: ICreateMutationProps<T>["params"];
      options?: ICreateMutationProps<T>["options"];
      setRequestId?: SetRequestId;
      reactQueryOptions?: any;
    }) => {
      return useMutation<T, DefaultError, ICreateMutationFunctionProps>({
        mutationKey: [`${factoryProps.route}`],
        mutationFn: (mutationFunctionProps: ICreateMutationFunctionProps) => {
          return createMutation<T>({
            ...factoryProps,
            cb: (data) => {
              addToGlobalStore({
                name: factoryProps.route,
                type: "create",
                result: data,
                props,
                setRequestId: props?.setRequestId,
              });
            },
            ...props,
          })(mutationFunctionProps);
        },
        ...props?.reactQueryOptions,
      });
    },
    update: (props?: {
      id?: IUpdateMutationProps<T>["id"];
      params?: IUpdateMutationProps<T>["params"];
      options?: IUpdateMutationProps<T>["options"];
      setRequestId?: SetRequestId;
      reactQueryOptions?: any;
    }) => {
      return useMutation<T, DefaultError, IUpdateMutationFunctionProps>({
        mutationKey: props?.id
          ? [`${factoryProps.route}/${props.id}`]
          : [`${factoryProps.route}`],
        mutationFn: (mutationFunctionProps: IUpdateMutationFunctionProps) => {
          return updateMutation<T>({
            ...factoryProps,
            cb: (data) => {
              addToGlobalStore({
                name: factoryProps.route,
                type: "update",
                result: data,
                props,
                setRequestId: props?.setRequestId,
              });
            },
            ...props,
          })(mutationFunctionProps);
        },
        ...props?.reactQueryOptions,
      });
    },
    delete: (props?: {
      id?: IDeleteMutationProps<T>["id"];
      params?: IDeleteMutationProps<T>["params"];
      options?: IDeleteMutationProps<T>["options"];
      reactQueryOptions?: any;
    }) => {
      return useMutation<T, DefaultError, IDeleteMutationFunctionProps>({
        mutationKey: props?.id
          ? [`${factoryProps.route}/${props.id}`]
          : [`${factoryProps.route}`],
        mutationFn: (mutationFunctionProps: IDeleteMutationFunctionProps) => {
          return deleteMutation<T>({
            ...factoryProps,
            cb: (data) => {
              addToGlobalStore({
                name: factoryProps.route,
                type: "delete",
                result: data,
                props,
              });
            },
            ...props,
          })(mutationFunctionProps);
        },
        ...props?.reactQueryOptions,
      });
    },
  };

  function subscription() {
    const triggeredActions: IAction[] = [];
    let revalidationChannel: any;
    const mountTime = Date.now();

    globalActionsStore.subscribe((state) => {
      const broadcastChannels = state.getActionsFromStoreByName(
        "/api/broadcast/channels",
      );

      broadcastChannels?.forEach((channel) => {
        if (revalidationChannel) {
          return;
        }

        if (channel.result?.["title"] === "revalidation") {
          revalidationChannel = channel.result;
        }
      });

      const broadcastMessages = state.getActionsFromStoreByName(
        "/api/broadcast/messages",
      );

      broadcastMessages
        ?.filter((message) => {
          return new Date(message.result["createdAt"]).getTime() > mountTime;
        })
        .forEach((message) => {
          if (!revalidationChannel) {
            return;
          }

          const isTriggered = triggeredActions.some((triggeredAction) => {
            return JSON.stringify(triggeredAction) === JSON.stringify(message);
          });

          if (!isTriggered) {
            triggeredActions.push(message);
            if (
              message.result?.["payload"] &&
              typeof message.result?.["payload"] === "string"
            ) {
              if (message.result["payload"].includes(factoryProps.route)) {
                factoryProps.queryClient.invalidateQueries({
                  queryKey: [message.result["payload"]],
                });
              }
            }
          }
        });
    });
  }

  subscription();

  return api;
}

function addToGlobalStore(props: {
  name: string;
  type: string;
  props: any;
  result: any;
  setRequestId?: SetRequestId;
}) {
  const requestId = createId();

  const state = globalActionsStore.getState();

  if (props.setRequestId) {
    props.setRequestId(requestId);
  }

  state.addAction({
    type: props.type,
    name: props.name,
    props: props.props,
    result: props.result,
    timestamp: Date.now(),
    requestId,
  });
}
