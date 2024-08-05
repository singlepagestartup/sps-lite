"use client";
import "client-only";

import { factory } from "@sps/shared-frontend-client-api";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { ErrorBoundary } from "@sps/ui-adapter";

export function Component<
  M extends { id: string },
  V,
  A extends {
    api: ReturnType<typeof factory<M>>;
    Error: React.ComponentType;
    Skeleton: React.ComponentType;
    Component: React.ComponentType<
      IComponentPropsExtended<M, V, IComponentProps<M, V>>
    >;
  },
  CP extends IComponentProps<M, V>,
>(props: CP & A) {
  const { Error, Skeleton, Component: Child } = props;

  const { data, isLoading } = props.api.findById({
    id: props.data.id,
    ...props.apiProps,
  });

  if (isLoading || !data) {
    return <Skeleton />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Child {...props} isServer={false} data={data} />
    </ErrorBoundary>
  );
}
