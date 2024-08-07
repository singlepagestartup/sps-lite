import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as ILogoutActionComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/logout-action";
import { IComponentProps as ILogoutButtonComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/logout-button";
import { IComponentProps as IIsAuthenticatatedWrapperComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/is-authenticatated-wrapper";
import { IComponentProps as ISetSessionWrapperComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/set-session-wrapper";

import { IComponentProps as ILoginAndPasswordComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/login-and-password";
import { IComponentProps as ISelectMethodComponentProps } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/select-method";

export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | ILogoutActionComponentProps
  | ILogoutButtonComponentProps
  | IIsAuthenticatatedWrapperComponentProps
  | ISetSessionWrapperComponentProps
  | ILoginAndPasswordComponentProps
  | ISelectMethodComponentProps
  | never;
