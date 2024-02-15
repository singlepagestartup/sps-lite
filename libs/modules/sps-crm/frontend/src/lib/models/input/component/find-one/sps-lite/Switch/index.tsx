import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "../../interface";

export function Switch(props: IComponentProps | IComponentPropsExtended) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? (
        <Skeleton {...props} />
      ) : (
        <Component {...(props as IComponentPropsExtended)} />
      )}
    </ErrorBoundary>
  );
}
