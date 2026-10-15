"use client";
import "client-only";

import { api } from "@sps/ecommerce/models/order/sdk/client";
import { Component as View } from "./Component";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  const totals = api.total({
    id: props.data.id,
    options: props.apiProps?.options,
  });

  return (
    <View
      isServer={false}
      variant={props.variant}
      data={props.data}
      className={props.className}
      children={props.children}
      totals={totals.data}
      totalsPending={totals.isPending}
      totalsError={totals.isError}
    />
  );
}
