import { IComponentPropsExtended } from "./interface";
import { Component as Tier } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-default";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-subscription"
      data-model="tier"
      data-variant={props.variant}
      className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start"
    >
      {props.data?.map((item, index) => {
        return (
          <Tier
            isServer={props.isServer}
            key={index}
            variant="default"
            data={item}
          />
        );
      })}
    </div>
  );
}
