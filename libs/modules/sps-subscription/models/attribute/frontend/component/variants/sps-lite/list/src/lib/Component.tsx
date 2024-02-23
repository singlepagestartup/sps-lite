import { IComponentPropsExtended } from "./interface";
import { Component as Attribute } from "@sps/sps-subscription-models-attribute-frontend-component-variants-sps-lite-default";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-subscription"
      data-model="attribute"
      data-variant={props.variant}
      className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start"
    >
      {props.data?.map((item, index) => {
        return (
          <Attribute
            isServer={false}
            key={index}
            variant="default"
            data={item}
          />
        );
      })}
    </div>
  );
}
