import { app as rolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/backend/app/root";
import { app as permission } from "@sps/sps-rbac/models/permission/backend/app/root";
import { app as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/app/root";
import { app as subjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/backend/app/root";
import { app as subjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/backend/app/root";
import { app as subject } from "@sps/sps-rbac/models/subject/backend/app/root";
import { app as session } from "@sps/sps-rbac/models/session/backend/app/root";
import { app as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/backend/app/root";
import { app as widgetsApp } from "@sps/sps-rbac/models/widget/backend/app/root";
import { app as authenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/app/root";
import { app as identity } from "@sps/sps-rbac/models/identity/backend/app/root";
import { app as authentication } from "@sps/sps-rbac/models/authentication/backend/app/root";
import { app as role } from "@sps/sps-rbac/models/role/backend/app/root";

export const routes = {
  "/roles-to-permissions": rolesToPermissions,
  "/permissions": permission,
  "/subjects-to-sessions": subjectsToSessions,
  "/subjects-to-identities": subjectsToIdentities,
  "/subjects-to-roles": subjectsToRoles,
  "/subjects": subject,
  "/sessions": session,
  "/widgets-to-authentication-blocks": widgetsToAuthenticationBlocks,
  "/widgets": widgetsApp.app,
  "/authentication-blocks": authenticationBlock,
  "/identities": identity,
  "/authentications": authentication,
  "/roles": role,
};
