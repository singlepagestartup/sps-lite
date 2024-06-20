"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { Component } from "./Component";
import { api } from "@sps/sps-website-builder/models/layout/frontend/api/server";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  if (props.data) {
    const data = await api.fetch.findById({
      id: props.data.id,
    });

    return (
      <ErrorBoundary fallback={Error}>
        <Component {...props} data={data} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={props.data} />
    </ErrorBoundary>
  );
}
