import { Component as Find } from "./find";
import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";
import { Component as Default } from "./default";
import { Component as ChangePassword } from "./change-password";
import { Component as ForgotPassword } from "./forgot-password";
import { Component as Login } from "./login";
import { Component as Logout } from "./logout";
import { Component as Registration } from "./registration";
import { Component as ResetPassword } from "./reset-password";

export const variants = {
  find: Find,
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  default: Default,
  "change-password": ChangePassword,
  "forgot-password": ForgotPassword,
  login: Login,
  logout: Logout,
  registration: Registration,
  "reset-password": ResetPassword,
};
