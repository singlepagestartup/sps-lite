"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/website-builder/models/modal/sdk/server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.find();

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
