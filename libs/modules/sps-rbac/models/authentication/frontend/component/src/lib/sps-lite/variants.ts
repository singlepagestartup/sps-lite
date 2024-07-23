import { Component as AdminTableRow } from "./admin-table-row";
import { Component as AdminTable } from "./admin-table";
import { Component as AdminSelectInput } from "./admin-select-input";
import { Component as AdminForm } from "./admin-form";
import { Component as LogoutAction } from "./logout-action";
import { Component as LogoutButton } from "./logout-button";
import { Component as IsAuthenticatatedWrapper } from "./is-authenticatated-wrapper";
import { Component as SetSessionWrapper } from "./set-session-wrapper";

import { Component as LoginAndPassword } from "./login-and-password";
import { Component as SelectMethod } from "./select-method";

export const variants = {
  "admin-table-row": AdminTableRow,
  "admin-table": AdminTable,
  "admin-select-input": AdminSelectInput,
  "admin-form": AdminForm,
  "logout-action": LogoutAction,
  "logout-button": LogoutButton,
  "is-authenticatated-wrapper": IsAuthenticatatedWrapper,
  "set-session-wrapper": SetSessionWrapper,

  "login-and-password": LoginAndPassword,
  "select-method": SelectMethod,
};