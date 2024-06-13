import { IComponentProps as IIsAuthenticatatedWrapperComponentProps } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-is-authenticatated-wrapper";
import { IComponentProps as ISetSessionWrapperComponentProps } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-set-session-wrapper";

import { IComponentProps as ILoginAndPasswordComponentProps } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-login-and-password";
import { IComponentProps as ISelectMethodComponentProps } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-select-method";

export type IComponentProps =
  | IIsAuthenticatatedWrapperComponentProps
  | ISetSessionWrapperComponentProps
  | ILoginAndPasswordComponentProps
  | ISelectMethodComponentProps
  | never;
