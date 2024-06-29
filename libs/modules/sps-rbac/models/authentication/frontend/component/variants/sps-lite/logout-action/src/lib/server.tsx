"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-rbac/models/authentication/frontend/api/server";
import { Component } from "./Component";
import { redirect } from "next/navigation";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.isAuthenticated();

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
