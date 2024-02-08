import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { IComponentPropsExtended } from "../../interface";

export function Simple(props: IComponentPropsExtended) {
  return (
    <ErrorBoundary fallback={Error}>
      <Component {...(props as IComponentPropsExtended)} />
    </ErrorBoundary>
  );
}
