import { Component as ParentComponent } from "./Component";
import { Skeleton } from "./Skeleton";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  if (props.showSkeletons) {
    return <Skeleton {...props} />;
  }

  return <ParentComponent {...props} />;
}
