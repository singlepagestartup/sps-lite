import { IComponentProps } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-table-row/Skeleton";

export function Skeleton(props: IComponentProps) {
  return <ParentComponent<IComponentProps> {...props} />;
}
