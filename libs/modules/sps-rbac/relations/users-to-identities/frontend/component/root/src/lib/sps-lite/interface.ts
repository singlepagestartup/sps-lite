import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-rbac-relations-users-to-identities-frontend-component-variants-sps-lite-select-right";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-rbac-relations-users-to-identities-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;
