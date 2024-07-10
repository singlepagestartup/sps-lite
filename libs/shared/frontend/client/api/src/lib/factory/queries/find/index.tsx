"use client";

import { actions, IFindActionProps } from "@sps/shared-frontend-api";

export interface IQueryProps<T> {
  params?: IFindActionProps["params"];
  options?: IFindActionProps["options"];
  host: string;
  route: string;
  cb?: (data: T[] | undefined) => void;
}

export function query<T>(
  props: IQueryProps<T>,
): () => Promise<T[] | undefined> {
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
