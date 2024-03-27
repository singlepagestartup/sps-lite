import { IComponentPropsExtended } from "./interface";
import { Component as Tier } from "@sps/sps-subscription-models-tier-frontend-component";
import { IModel as ITier } from "@sps/sps-subscription-models-tier-contracts-extended";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.checkout-form-block"
      data-variant={props.variant}
      className="mx-auto max-w-7xl py-16 px-2 lg:px-0"
    >
      <p className="text-4xl font-bold pt-10 pb-2">Checkout Form Block</p>
      <p className="text-2xl pb-10">SingleStepWithTier</p>
      <Tier variant="get-from-url" isServer={props.isServer}>
        {({ data }: { data: ITier }) => {
          return (
            <Tier isServer={props.isServer} variant="checkout" data={data} />
          );
        }}
      </Tier>
    </div>
  );
}
