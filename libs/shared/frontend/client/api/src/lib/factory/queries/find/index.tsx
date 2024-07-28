"use client";

import { actions, IFindActionProps } from "@sps/shared-frontend-api";
import { NextRequestOptions } from "@sps/shared-utils";

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
    const authorization = localStorage.getItem("authorization");
    const options: Partial<NextRequestOptions> = props.options || {};

    if (authorization) {
      options.headers = {
        ...options.headers,
        Authorization: authorization,
      };
    }

    const res = await actions.find<T>({
      host: props.host,
      route: props.route,
      params: props.params,
      options,
    });

    if (props.cb) {
      props.cb(res);
    }

    return res;
  };
}
