import type { IComponentProps } from "./interface";
import { Component as ChildComponent } from "./Component";
export function Component(props: IComponentProps) {
  return (
    <ChildComponent
      isServer={props.isServer}
      variant={props.variant}
      product={props.product}
      language={props.language}
    />
  );
}
