import { Component as IsAuthenticatatedWrapper } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-is-authenticatated-wrapper";
import { Component as SetSessionWrapper } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-set-session-wrapper";

import { Component as LoginAndPassword } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-login-and-password";
import { Component as SelectMethod } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-select-method";

export const variants = {
  "is-authenticatated-wrapper": IsAuthenticatatedWrapper,
  "set-session-wrapper": SetSessionWrapper,

  "login-and-password": LoginAndPassword,
  "select-method": SelectMethod,
};
