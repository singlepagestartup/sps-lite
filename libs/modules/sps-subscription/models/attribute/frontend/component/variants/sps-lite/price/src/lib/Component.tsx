import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  if (!props.data.attributeKey) {
    return <></>;
  }

  if (props.data.attributeKey.uid !== "price") {
    return <></>;
  }

  return (
    <div
      data-module="sps-subscription"
      data-model="attribute"
      data-variant={props.variant}
      className=""
    >
      <p className="text-5xl font-bold tracking-tight text-gray-900">
        {props.data.currency?.unicode || ""}
        {props.data[props.data.attributeKey?.type]}
      </p>
    </div>
  );
}
