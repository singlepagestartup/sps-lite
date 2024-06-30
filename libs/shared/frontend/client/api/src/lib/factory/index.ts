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
} from "./mutations/delete";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";

export interface IFactoryProps {
  route: string;
  host: string;
}

export function factory<T>(factoryProps: IFactoryProps) {
  const api = {
    findById: (props: {
      id?: IFindByIdQueryProps["id"];
      params?: IFindByIdQueryProps["params"];
      options?: IFindByIdQueryProps["options"];
    }) => {
      return useQuery<T>({
        queryKey: [`${factoryProps.route}/${props.id}`],
        queryFn: props.id
          ? findByIdQuery({ ...factoryProps, ...props, id: props.id })
          : undefined,
        enabled: props.id ? true : false,
      });
    },
    find: (props?: {
      params?: IFindQueryProps["params"];
      options?: IFindQueryProps["options"];
    }) => {
      return useQuery<T[]>({
        queryKey: [`${factoryProps.route}`],
        queryFn: findQuery({ ...factoryProps, ...props }),
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
      });
    },
    update: (props: {
      id?: IUpdateMutationProps["id"];
      params?: IUpdateMutationProps["params"];
      options?: IUpdateMutationProps["options"];
    }) => {
      return useMutation<T, DefaultError, IUpdateMutationFunctionProps>({
        mutationKey: [`${factoryProps.route}/${props.id}`],
        mutationFn: (mutationFunctionProps: IUpdateMutationFunctionProps) => {
          return updateMutation<T>({
            ...factoryProps,
            ...props,
          })(mutationFunctionProps);
        },
      });
    },
    delete: (props: {
      id: IDeleteMutationProps["id"];
      params?: IDeleteMutationProps["params"];
      options?: IDeleteMutationProps["options"];
    }) => {
      return useMutation<T>({
        mutationKey: [`${factoryProps.route}/${props.id}`],
        mutationFn: deleteMutation({ ...props, ...factoryProps }),
      });
    },
  };

  return api;
}
