"use client";

import { actions, IFindActionsProps } from "@sps/shared-frontend-api";

export interface IQueryProps {
  params?: IFindActionsProps["params"];
  options?: IFindActionsProps["options"];
  host: string;
  route: string;
}

export function query<T>(props: IQueryProps): () => Promise<T[]> {
  return async () => {
    const res = await actions.find<T>({
      host: props.host,
      route: props.route,
      params: props.params,
      options: props.options,
    });

    return res;
  };
}
