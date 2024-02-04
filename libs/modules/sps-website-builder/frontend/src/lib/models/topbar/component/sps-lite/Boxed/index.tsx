import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "../../interface";
import { ErrorBoundary } from "@sps/ui-adapter";

export function Boxed(props: IComponentProps | IComponentPropsExtended) {
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
