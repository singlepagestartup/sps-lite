"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-rbac-models-authentication-frontend-api-client";

export default function Client(props: IComponentProps) {
  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
