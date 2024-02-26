import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-subscription"
      data-model="attribute-key"
      data-variant={props.variant}
      className=""
    >
      <p className="capitalize">{props.data.title}</p>
    </div>
  );
}
