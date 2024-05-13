import { IComponentProps as IAuthWrapperComponentProps } from "@sps/sps-rbac-models-user-frontend-component-variants-sps-lite-auth-wrapper";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-rbac-models-user-frontend-component-variants-sps-lite-default";

export type IComponentProps =
  | IAuthWrapperComponentProps
  | IDefaultComponentProps;
