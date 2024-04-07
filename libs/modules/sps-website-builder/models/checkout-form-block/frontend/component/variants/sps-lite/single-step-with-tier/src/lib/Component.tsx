import { IComponentPropsExtended } from "./interface";
import { Component as Tier } from "@sps/sps-subscription-models-tier-frontend-component";
import { Component as PageGetUrlModelId } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-url-model-id";

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
      <PageGetUrlModelId
        isServer={props.isServer}
        variant="get-url-model-id"
        model="tier"
      >
        {({ data: tierId }) => {
          if (!tierId) {
            return <></>;
          }

          return (
            <Tier isServer={props.isServer} variant="get-by-id" id={tierId}>
              {({ data: tier }) => {
                return (
                  <Tier
                    isServer={props.isServer}
                    variant="checkout"
                    data={tier}
                  />
                );
              }}
            </Tier>
          );
        }}
      </PageGetUrlModelId>
    </div>
  );
}
