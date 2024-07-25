import { Component as ResetPassword } from "./reset-password";
import { Component as ForgotPassword } from "./forgot-password";
import { Component as ChangePassword } from "./change-password";
import { Component as Registration } from "./registration";
import { Component as Logout } from "./logout";
import { Component as Login } from "./login";
import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";

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
  "admin-form": AdminForm,
};
