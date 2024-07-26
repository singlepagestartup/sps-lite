import { IComponentProps as IFindComponentProps } from "./find";
import { IComponentProps as IAdminTableRowComponentProps } from "./admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "./admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "./admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "./admin-form";
import { IComponentProps as ILogoutActionComponentProps } from "./logout-action";
import { IComponentProps as ILogoutButtonComponentProps } from "./logout-button";
import { IComponentProps as IIsAuthenticatatedWrapperComponentProps } from "./is-authenticatated-wrapper";
import { IComponentProps as ISetSessionWrapperComponentProps } from "./set-session-wrapper";

import { IComponentProps as ILoginAndPasswordComponentProps } from "./login-and-password";
import { IComponentProps as ISelectMethodComponentProps } from "./select-method";

export type IComponentProps =
  | IFindComponentProps
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
