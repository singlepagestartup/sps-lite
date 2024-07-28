"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-rbac/models/authentication/sdk/server";
import { Component } from "./Component";
import { Component as SelectMethod } from "../../../select-method";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.isAuthorized(props.apiProps);

  if (!data) {
    return (
      <div className="w-full max-w-7xl mx-auto py-20">
        <SelectMethod
          isServer={props.isServer}
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
