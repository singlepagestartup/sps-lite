import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  if (!props.data.attributeKey) {
    return <></>;
  }

  return (
    <div
      data-module="sps-subscription"
      data-model="attribute"
      data-variant={props.variant}
      className=""
    >
      <p className="">{props.data[props.data.attributeKey?.type]}</p>
    </div>
  );
}
