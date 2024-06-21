import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
    >
      {props.children}
    </div>
  );
}
