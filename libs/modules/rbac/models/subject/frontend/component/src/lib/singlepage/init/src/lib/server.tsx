"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";

export default async function Server(props: IComponentProps) {
  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
