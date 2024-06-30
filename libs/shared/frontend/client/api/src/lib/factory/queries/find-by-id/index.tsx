"use client";

import { actions, IFindByIdActionProps } from "@sps/shared-frontend-api";

export interface IQueryProps {
  id: IFindByIdActionProps["id"];
  params?: IFindByIdActionProps["params"];
  options?: IFindByIdActionProps["options"];
  host: string;
  route: string;
}

export function query<T>(props: IQueryProps): () => Promise<T> {
  return async () => {
    const res = await actions.findById<T>({
      id: props.id,
      host: props.host,
      route: props.route,
      params: props.params,
      options: props.options,
    });

    return res;
  };
}
