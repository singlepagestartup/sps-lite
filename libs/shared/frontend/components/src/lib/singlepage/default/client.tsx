"use client";
import "client-only";

import { factory } from "@sps/shared-frontend-client-api";
import { IComponentProps, IComponentPropsExtended } from "./interface";

export function Component<
  M extends { id: string },
  V,
  A extends {
    api: ReturnType<typeof factory<M>>;
    Skeleton: React.ComponentType;
    Component: React.ComponentType<
      IComponentPropsExtended<M, V, IComponentProps<M, V>>
    >;
  },
  CP extends IComponentProps<M, V>,
>(props: CP & A) {
  const { Skeleton, Component: Child } = props;

  const { data, isLoading } = props.api.findById({
    id: props.data.id,
    ...props.apiProps,
  });

  if (isLoading || !data) {
    return <Skeleton />;
  }

  return <Child {...props} isServer={false} data={data} />;
}
