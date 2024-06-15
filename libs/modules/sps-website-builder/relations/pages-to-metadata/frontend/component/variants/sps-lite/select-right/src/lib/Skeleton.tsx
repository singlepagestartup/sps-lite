import { ModelEntityCard } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return <ModelEntityCard showSkeletons={true} />;
}
