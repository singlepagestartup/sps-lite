import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="subject"
      data-variant={props.variant}
    >
      {props.children}
    </div>
  );
}
