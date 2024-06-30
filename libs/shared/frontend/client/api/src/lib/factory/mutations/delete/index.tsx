"use client";

import { actions, IDeleteActionProps } from "@sps/shared-frontend-api";

export interface IMutationProps {
  id: IDeleteActionProps["id"];
  options?: IDeleteActionProps["options"];
  params?: IDeleteActionProps["params"];
  host: string;
  route: string;
}

export function mutation<T>(props: IMutationProps): () => Promise<T> {
  return async () => {
    const res = await actions.delete<T>({
      id: props.id,
      host: props.host,
      route: props.route,
      params: props.params,
      options: props.options,
    });

    return res;
  };
}
