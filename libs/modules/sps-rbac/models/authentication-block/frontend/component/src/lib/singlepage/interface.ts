import { IComponentProps as IResetPasswordComponentProps } from "./reset-password";
import { IComponentProps as IForgotPasswordComponentProps } from "./forgot-password";
import { IComponentProps as IChangePasswordComponentProps } from "./change-password";
import { IComponentProps as IRegistrationComponentProps } from "./registration";
import { IComponentProps as ILogoutComponentProps } from "./logout";
import { IComponentProps as ILoginComponentProps } from "./login";
import { IComponentProps as IAdminTableRowComponentProps } from "./admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "./admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "./admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "./admin-form";

export type IComponentProps =
  | IResetPasswordComponentProps
  | IForgotPasswordComponentProps
  | IChangePasswordComponentProps
  | IRegistrationComponentProps
  | ILogoutComponentProps
  | ILoginComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | never;
