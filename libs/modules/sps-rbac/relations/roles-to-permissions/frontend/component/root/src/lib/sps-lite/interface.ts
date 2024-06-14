import { IComponentProps as IDefaultComponentProps } from "@sps/sps-rbac-relations-roles-to-permissions-frontend-component-variants-sps-lite-default";
import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-rbac-relations-roles-to-permissions-frontend-component-variants-sps-lite-select-right";
export type IComponentProps =
  | IDefaultComponentProps
  | ISelectRightComponentProps
  | never;
