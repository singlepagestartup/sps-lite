"use client";
import "client-only";

import { Component } from "./Component";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { ErrorBoundary } from "@sps/ui-adapter";

export default function Client(props: IComponentProps) {
  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
