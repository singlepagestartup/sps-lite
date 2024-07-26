import { IComponentProps } from "./interface";
import { Component as ParentSkeleton } from "@sps/shared-frontend-components/singlepage/skeletons/default";

export function Skeleton(props: IComponentProps) {
  return <ParentSkeleton<IComponentProps> {...props} />;
}