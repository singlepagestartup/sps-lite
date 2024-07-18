import { app as rolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/backend/app/root";

import { app as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/app/root";
import { app as subjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/backend/app/root";
import { app as subjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/backend/app/root";

import { app as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/backend/app/root";
import { app as authenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/app/root";

export const routes = {
  "/roles-to-permissions": rolesToPermissions,
  "/subjects-to-sessions": subjectsToSessions,
  "/subjects-to-identities": subjectsToIdentities,
  "/subjects-to-roles": subjectsToRoles,
  "/widgets-to-authentication-blocks": widgetsToAuthenticationBlocks,
  "/authentication-blocks": authenticationBlock,
};
