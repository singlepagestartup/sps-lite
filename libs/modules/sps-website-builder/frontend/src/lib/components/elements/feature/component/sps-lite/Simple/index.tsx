import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { IComponent, IComponentExtended } from "../..";

export function Simple(props: IComponent | IComponentExtended) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
