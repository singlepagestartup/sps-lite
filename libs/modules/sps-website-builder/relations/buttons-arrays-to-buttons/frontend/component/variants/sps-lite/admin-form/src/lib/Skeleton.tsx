import { IComponentProps } from "./interface";
import { Component as ParentSkeleton } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Skeleton";

export function Skeleton(props: IComponentProps) {
  return <ParentSkeleton<IComponentProps> {...props} />;
}
