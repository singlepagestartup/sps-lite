import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  if (!props.data.attributeKey) {
    return <></>;
  }

  return (
    <div className="">
      <p className="">{props.data[props.data.attributeKey?.type]}</p>
    </div>
  );
}
