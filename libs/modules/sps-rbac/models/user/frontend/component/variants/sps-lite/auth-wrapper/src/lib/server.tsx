"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-rbac-models-user-frontend-api-server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  return <ErrorBoundary fallback={Error}>{props.children}</ErrorBoundary>;
}
