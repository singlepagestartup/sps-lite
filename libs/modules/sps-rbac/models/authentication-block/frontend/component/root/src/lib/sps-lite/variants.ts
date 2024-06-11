import { Component as ResetPassword } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-reset-password";
import { Component as ForgotPassword } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-forgot-password";
import { Component as ChangePassword } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-change-password";
import { Component as Registration } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-registration";
import { Component as Logout } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-logout";
import { Component as Login } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-login";
import { Component as AdminTableRow } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-table-row";
import { Component as AdminTable } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-table";
import { Component as AdminSelectInput } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-select-input";
import { Component as AdminFormInputs } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-form-inputs";
import { Component as AdminForm } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-form";

export const variants = {
  "reset-password": ResetPassword,
  "forgot-password": ForgotPassword,
  "change-password": ChangePassword,
  registration: Registration,
  logout: Logout,
  login: Login,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form-inputs": AdminFormInputs,
  "admin-form": AdminForm,
};
