"use server";
import "server-only";

import { api } from "@sps/ecommerce/models/order/sdk/server";
import { Component as View } from "./Component";
import type { IComponentPropsExtended } from "./interface";

export async function Component(props: IComponentPropsExtended) {
  let totals: IComponentPropsExtended["totals"];
  let totalsError = false;
  try {
    totals = await api.total({
      id: props.data.id,
      options: props.apiProps?.options,
    });
  } catch {
    totalsError = true;
  }

  return (
    <View
      isServer={true}
      variant={props.variant}
      data={props.data}
      className={props.className}
      children={props.children}
      totals={totals}
      totalsError={totalsError}
    />
  );
}
