import { IComponentProps as ILoginAndPasswordComponentProps } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-login-and-password";
import { IComponentProps as ISelectMethodComponentProps } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-select-method";

export type IComponentProps =
  | ILoginAndPasswordComponentProps
  | ISelectMethodComponentProps
  | never;
