"use client";

import { actions, IFindActionsProps } from "@sps/shared-frontend-api";

export interface IQueryProps<T> {
  params?: IFindActionsProps["params"];
  options?: IFindActionsProps["options"];
  host: string;
  route: string;
  cb?: (data: T[]) => void;
}

export function query<T>(props: IQueryProps<T>): () => Promise<T[]> {
  return async () => {
    const res = await actions.find<T>({
      host: props.host,
      route: props.route,
      params: props.params,
      options: props.options,
    });

    if (props.cb) {
      props.cb(res);
    }

    return res;
  };
}
