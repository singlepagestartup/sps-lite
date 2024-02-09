import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "../../interface";

type IProps =
  | IComponentProps<{ variant: "list" }>
  | IComponentPropsExtended<{ variant: "list" }>;

export function List(props: IProps) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? (
        <Skeleton {...props} />
      ) : (
        <Component
          {...(props as IComponentPropsExtended<{ variant: "list" }>)}
        />
      )}
    </ErrorBoundary>
  );
}
