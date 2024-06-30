"use client";

import { actions, ICreateActionProps } from "@sps/shared-frontend-api";

export interface IMutationProps {
  options?: ICreateActionProps["options"];
  params?: ICreateActionProps["params"];
  data: ICreateActionProps["data"];
  host: string;
  route: string;
}

export interface IMutationFunctionProps {
  data: ICreateActionProps["data"];
  options?: ICreateActionProps["options"];
  params?: ICreateActionProps["params"];
}

export function mutation<T>(
  props: IMutationProps,
): (mutationFunctionProps: IMutationFunctionProps) => Promise<T> {
  return async (mutationFunctionProps: IMutationFunctionProps) => {
    const res = await actions.create<T>({
      host: props.host,
      route: props.route,
      params: mutationFunctionProps.params || props.params,
      options: mutationFunctionProps.options || props.options,
      data: mutationFunctionProps.data,
    });

    return res;
  };
}
