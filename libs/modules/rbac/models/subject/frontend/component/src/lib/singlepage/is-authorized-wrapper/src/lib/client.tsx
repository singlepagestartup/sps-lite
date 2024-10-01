"use client";
import "client-only";

import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { IComponentProps } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component as SelectMethod } from "../../../select-method";
import { cn } from "@sps/shared-frontend-client-utils";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.isAuthorized(props.apiProps);

  if (isFetching || isLoading) {
    return <Skeleton />;
  }

  if (!data) {
    return (
      <div className={cn("w-full flex flex-col", props.className)}>
        <SelectMethod
          isServer={false}
          hostUrl={props.hostUrl}
          variant="select-method"
          type="authentication"
        />
      </div>
    );
  }

  return <Component {...props} />;
}
