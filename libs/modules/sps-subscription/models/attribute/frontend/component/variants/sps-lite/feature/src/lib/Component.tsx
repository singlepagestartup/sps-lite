import { IComponentPropsExtended } from "./interface";
import { Component as AttributeKey } from "@sps/sps-subscription-models-attribute-key-frontend-component";

export function Component(props: IComponentPropsExtended) {
  if (!props.data.attributeKey) {
    return <></>;
  }

  if (props.data.attributeKey.uid === "price") {
    return <></>;
  }

  return (
    <div
      data-module="sps-subscription"
      data-model="attribute"
      data-variant={props.variant}
      className="flex gap-2 items-center"
    >
      <AttributeKey
        isServer={false}
        variant="default"
        data={props.data.attributeKey}
      />
      <p className="font-bold tracking-tight text-gray-900">
        {props.data[props.data.attributeKey?.type]}
      </p>
    </div>
  );
}
