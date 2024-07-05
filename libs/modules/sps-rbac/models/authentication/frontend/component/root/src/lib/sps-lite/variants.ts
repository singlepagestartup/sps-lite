import { Component as AdminTableRow } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-table-row";
import { Component as AdminTable } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-table";
import { Component as AdminSelectInput } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-select-input";
import { Component as AdminForm } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/admin-form";
import { Component as LogoutAction } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/logout-action";
import { Component as LogoutButton } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/logout-button";
import { Component as IsAuthenticatatedWrapper } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/is-authenticatated-wrapper";
import { Component as SetSessionWrapper } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/set-session-wrapper";

import { Component as LoginAndPassword } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/login-and-password";
import { Component as SelectMethod } from "@sps/sps-rbac/models/authentication/frontend/component/variants/sps-lite/select-method";

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
