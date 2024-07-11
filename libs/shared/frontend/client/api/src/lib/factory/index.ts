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
import {
  globalActionsStore,
  TRevalidationQueueItem,
} from "@sps/shared-frontend-client-store";
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
      });
    },
    find: (props?: {
      params?: IFindQueryProps<T>["params"];
      options?: IFindQueryProps<T>["options"];
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
      });
    },
    create: (props?: {
      params?: ICreateMutationProps<T>["params"];
      options?: ICreateMutationProps<T>["options"];
      setRequestId?: SetRequestId;
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
      });
    },
    update: (props?: {
      id?: IUpdateMutationProps<T>["id"];
      params?: IUpdateMutationProps<T>["params"];
      options?: IUpdateMutationProps<T>["options"];
      setRequestId?: SetRequestId;
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
        onSuccess(data) {
          return data;
        },
      });
    },
    delete: (props?: {
      id?: IDeleteMutationProps<T>["id"];
      params?: IDeleteMutationProps<T>["params"];
      options?: IDeleteMutationProps<T>["options"];
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
      });
    },
  };

  function subscription() {
    const triggeredActions: TRevalidationQueueItem[] = [];

    globalActionsStore.subscribe((state) => {
      const revalidationQueue = state.revalidationQueue;

      revalidationQueue.forEach((revalidationItem) => {
        const isTriggered = triggeredActions.some((triggeredAction) => {
          return (
            JSON.stringify(triggeredAction) === JSON.stringify(revalidationItem)
          );
        });

        if (!isTriggered) {
          triggeredActions.push(revalidationItem);

          if (
            revalidationItem.tags.some((tag) =>
              tag.includes(factoryProps.route),
            )
          ) {
            factoryProps.queryClient.invalidateQueries({
              queryKey: revalidationItem.tags,
            });
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
