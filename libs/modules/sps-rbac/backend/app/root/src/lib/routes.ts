import { app as session } from "@sps/sps-rbac-models-session-backend-app";
import { app as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-backend-app";
import { app as widget } from "@sps/sps-rbac-models-widget-backend-app";
import { app as authenticationBlock } from "@sps/sps-rbac-models-authentication-block-backend-app";

import { app as identity } from "@sps/sps-rbac-models-identity-backend-app";

import { app as authentication } from "@sps/sps-rbac-models-authentication-backend-app";
import { app as role } from "@sps/sps-rbac-models-role-backend-app";
export const routes = {
  "/sessions": session,
  "/widgets-to-authentication-blocks": widgetsToAuthenticationBlocks,
  "/widgets": widget,
  "/authentication-blocks": authenticationBlock,

  "/identities": identity,

  "/authentications": authentication,
  "/roles": role,
};
