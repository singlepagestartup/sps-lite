import { Component } from "./Component";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps, IComponentPropsExtended } from "../../interface";

export function SingleStepWithCart(
  props: IComponentProps | IComponentPropsExtended,
) {
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
