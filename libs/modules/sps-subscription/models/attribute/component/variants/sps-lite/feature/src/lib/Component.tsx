import { IComponentPropsExtended } from "./interface";
import { Component as AttributeKey } from "@sps/sps-subscription-attribute-key-component";

export function Component(props: IComponentPropsExtended) {
  if (!props.data.attributeKey) {
    return <></>;
  }

  if (props.data.attributeKey.uid === "price") {
    return <></>;
  }

  return (
    <div className="flex gap-2 items-center">
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
