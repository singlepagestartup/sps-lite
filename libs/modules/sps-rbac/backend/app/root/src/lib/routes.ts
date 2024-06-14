import { app as subjectsToSessions } from "@sps/sps-rbac-relations-subjects-to-sessions-backend-app";
import { app as subjectsToIdentities } from "@sps/sps-rbac-relations-subjects-to-identities-backend-app";
import { app as subjectsToRoles } from "@sps/sps-rbac-relations-subjects-to-roles-backend-app";
import { app as subject } from "@sps/sps-rbac-models-subject-backend-app";
import { app as session } from "@sps/sps-rbac-models-session-backend-app";
import { app as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-backend-app";
import { app as widget } from "@sps/sps-rbac-models-widget-backend-app";
import { app as authenticationBlock } from "@sps/sps-rbac-models-authentication-block-backend-app";

import { app as identity } from "@sps/sps-rbac-models-identity-backend-app";

import { app as authentication } from "@sps/sps-rbac-models-authentication-backend-app";
import { app as role } from "@sps/sps-rbac-models-role-backend-app";
export const routes = {
  "/subjects-to-sessions": subjectsToSessions,
  "/subjects-to-identities": subjectsToIdentities,
  "/subjects-to-roles": subjectsToRoles,
  "/subjects": subject,
  "/sessions": session,
  "/widgets-to-authentication-blocks": widgetsToAuthenticationBlocks,
  "/widgets": widget,
  "/authentication-blocks": authenticationBlock,

  "/identities": identity,

  "/authentications": authentication,
  "/roles": role,
};
