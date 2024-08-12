"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-rbac/models/subject/sdk/client";
import { Component as SelectMethod } from "../../../select-method";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading } = api.isAuthorized(props.apiProps);

  if (isFetching || isLoading) {
    return <Skeleton />;
  }

  if (!data) {
    return (
      <div className="w-full max-w-7xl mx-auto py-20">
        <SelectMethod
          isServer={false}
          hostUrl={props.hostUrl}
          variant="select-method"
          type="authentication"
        />
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
