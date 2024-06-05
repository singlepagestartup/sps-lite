import { IComponentProps as IResetPasswordComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-reset-password";
import { IComponentProps as IForgotPasswordComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-forgot-password";
import { IComponentProps as IChangePasswordComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-change-password";
import { IComponentProps as IRegistrationComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-registration";
import { IComponentProps as ILogoutComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-logout";
import { IComponentProps as ILoginComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-login";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-form";

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
  | IAdminFormInputsComponentProps
  | IAdminFormComponentProps
  | never;
