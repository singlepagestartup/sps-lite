import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "../../interface";

type IProps =
  | IComponentProps<{ variant: "checkout" }>
  | IComponentPropsExtended<{ variant: "checkout" }>;

export function Checkout(props: IProps) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? (
        <Skeleton {...props} />
      ) : (
        <Component
          {...(props as IComponentPropsExtended<{ variant: "checkout" }>)}
        />
      )}
    </ErrorBoundary>
  );
}
