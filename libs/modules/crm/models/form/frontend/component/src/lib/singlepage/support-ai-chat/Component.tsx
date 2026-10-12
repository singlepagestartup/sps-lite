import { Component as ClientComponent } from "./ClientComponent";
import type { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <ClientComponent
      isServer={props.isServer}
      variant={props.variant}
      data={props.data}
      className={props.className}
      children={props.children}
      id={props.id}
      values={props.values}
      errors={props.errors}
      onChange={props.onChange}
      submitted={props.submitted}
      pending={props.pending}
    />
  );
}
