"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-rbac-models-authentication-frontend-api-client";
import { Component as AuthenticationSpsLiteSelectMethod } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-select-method";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useIsAuthenticatedQuery({});

  if (isFetching || isLoading || isUninitialized) {
    return <Skeleton {...props} />;
  }

  if (!data) {
    return (
      <div className="w-full max-w-7xl mx-auto py-20">
        <AuthenticationSpsLiteSelectMethod
          isServer={false}
          hostUrl={props.hostUrl}
          variant="select-method"
        />
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
