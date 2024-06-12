import { model as usersToSessions } from "@sps/sps-rbac-relations-users-to-sessions-backend-model";
import { model as session } from "@sps/sps-rbac-models-session-backend-model";
import { model as widgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-backend-model";
import { model as widget } from "@sps/sps-rbac-models-widget-backend-model";
import { model as authenticationBlock } from "@sps/sps-rbac-models-authentication-block-backend-model";
import { model as usersToRoles } from "@sps/sps-rbac-relations-users-to-roles-backend-model";
import { model as usersToIdentities } from "@sps/sps-rbac-relations-users-to-identities-backend-model";
import { model as identity } from "@sps/sps-rbac-models-identity-backend-model";
import { model as user } from "@sps/sps-rbac-models-user-backend-model";
import { model as authentication } from "@sps/sps-rbac-models-authentication-backend-model";
import { model as role } from "@sps/sps-rbac-models-role-backend-model";
export const models = {
  usersToSessions,
  session,
  widgetsToAuthenticationBlocks,
  widget,
  authenticationBlock,
  usersToRoles,
  usersToIdentities,
  identity,
  user,
  authentication,
  role,
};
