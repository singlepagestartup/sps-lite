import { IComponentPropsExtended } from "./interface";
import { Component as Tier } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-checkout";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-subscription"
      data-model="tier"
      data-variant={props.variant}
      className="w-full py-10 flex flex-col gap-1"
    >
      <Tier isServer={props.isServer} variant="checkout" data={props.data} />
    </div>
  );
}
