"use client";

import { actions, IDeleteActionProps } from "@sps/shared-frontend-api";

export interface IMutationProps {
  id?: IDeleteActionProps["id"];
  options?: IDeleteActionProps["options"];
  params?: IDeleteActionProps["params"];
  host: string;
  route: string;
}

export interface IMutationFunctionProps {
  id?: IDeleteActionProps["id"];
  options?: IDeleteActionProps["options"];
  params?: IDeleteActionProps["params"];
}

export function mutation<T>(
  props: IMutationProps,
): (mutationFunctionProps: IMutationFunctionProps) => Promise<T> {
  return async (mutationFunctionProps: IMutationFunctionProps) => {
    const id = mutationFunctionProps.id || props.id;

    if (!id) {
      throw new Error("id is required");
    }

    const res = await actions.delete<T>({
      id,
      host: props.host,
      route: props.route,
      params: mutationFunctionProps.params || props.params,
      options: mutationFunctionProps.options || props.options,
    });

    return res;
  };
}
