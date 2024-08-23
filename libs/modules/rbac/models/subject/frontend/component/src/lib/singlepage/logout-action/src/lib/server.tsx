"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/rbac/models/subject/sdk/server";
import { Component } from "./Component";
import { redirect } from "next/navigation";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
