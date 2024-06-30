"use client";

import { actions, IUpdateActionProps } from "@sps/shared-frontend-api";

export interface IMutationProps {
  host: string;
  route: string;
  id?: IUpdateActionProps["id"];
  options?: IUpdateActionProps["options"];
  params?: IUpdateActionProps["params"];
}

export interface IMutationFunctionProps {
  id?: IUpdateActionProps["id"];
  data: IUpdateActionProps["data"];
  options?: IUpdateActionProps["options"];
  params?: IUpdateActionProps["params"];
}

export function mutation<T>(
  props: IMutationProps,
): (mutationFunctionProps: IMutationFunctionProps) => Promise<T> {
  return async (mutationFunctionProps: IMutationFunctionProps) => {
    const id = mutationFunctionProps.id || props.id;

    if (!id) {
      throw new Error("id is required");
    }

    const res = await actions.update<T>({
      id,
      host: props.host,
      route: props.route,
      params: mutationFunctionProps.params || props.params,
      options: mutationFunctionProps.options || props.options,
      data: mutationFunctionProps.data,
    });

    return res;
  };
}
