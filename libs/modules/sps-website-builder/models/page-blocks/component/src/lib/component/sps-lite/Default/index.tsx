import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { IComponentProps } from "./interface";

export function Default(props: IComponentProps) {
  return (
    <ErrorBoundary fallback={Error}>
      <Component {...(props as IComponentProps)} />
    </ErrorBoundary>
  );
}
