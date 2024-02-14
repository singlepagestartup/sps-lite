import { IComponentProps } from "../interface";
import { variants } from "./variants";

export function Component(props: IComponentProps) {
  console.log(`🚀 ~ Component ~ props:`, props);
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
