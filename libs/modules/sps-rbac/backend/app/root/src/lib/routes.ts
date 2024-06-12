import { app as usersToSessions } from "@sps/sps-rbac-relations-users-to-sessions-backend-app";
import { app as session } from "@sps/sps-rbac-models-session-backend-app";
import { app as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-backend-app";
import { app as widget } from "@sps/sps-rbac-models-widget-backend-app";
import { app as authenticationBlock } from "@sps/sps-rbac-models-authentication-block-backend-app";
import { app as usersToRoles } from "@sps/sps-rbac-relations-users-to-roles-backend-app";
import { app as usersToIdentities } from "@sps/sps-rbac-relations-users-to-identities-backend-app";
import { app as identity } from "@sps/sps-rbac-models-identity-backend-app";
import { app as user } from "@sps/sps-rbac-models-user-backend-app";
import { app as authentication } from "@sps/sps-rbac-models-authentication-backend-app";
import { app as role } from "@sps/sps-rbac-models-role-backend-app";
export const routes = {
  "/users-to-sessions": usersToSessions,
  "/sessions": session,
  "/widgets-to-authentication-blocks": widgetsToAuthenticationBlocks,
  "/widgets": widget,
  "/authentication-blocks": authenticationBlock,
  "/users-to-roles": usersToRoles,
  "/users-to-identities": usersToIdentities,
  "/identities": identity,
  "/users": user,
  "/authentications": authentication,
  "/roles": role,
};
