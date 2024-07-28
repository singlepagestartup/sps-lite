"use client";

import { authorization } from "@sps/shared-frontend-client-utils";
import { actions, IFindByIdActionProps } from "@sps/shared-frontend-api";

export interface IQueryProps<T> {
  id: IFindByIdActionProps["id"];
  params?: IFindByIdActionProps["params"];
  options?: IFindByIdActionProps["options"];
  host: string;
  route: string;
  cb?: (data: T | undefined) => void;
}

export function query<T>(props: IQueryProps<T>): () => Promise<T | undefined> {
  return async () => {
    const headers = authorization.headers();

    const res = await actions.findById<T>({
      id: props.id,
      host: props.host,
      route: props.route,
      params: props.params,
      options: {
        headers,
        ...props.options,
      },
    });

    if (props.cb) {
      props.cb(res);
    }

    return res;
  };
}
