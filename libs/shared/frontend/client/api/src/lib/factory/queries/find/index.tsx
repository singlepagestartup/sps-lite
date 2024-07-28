"use client";

import { actions, IFindActionProps } from "@sps/shared-frontend-api";
import { authorization } from "@sps/shared-frontend-client-utils";

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
    const headers = authorization.headers();

    const res = await actions.find<T>({
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
