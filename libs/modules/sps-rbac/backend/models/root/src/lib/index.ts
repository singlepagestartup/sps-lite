import { model as rolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/backend/model/root";
import { model as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/model/root";
import { model as subjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/backend/model/root";
import { model as subjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/backend/model/root";
import { model as sessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/backend/model/root";
import { model as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/backend/model/root";
export const models = {
  rolesToPermissions,
  subjectsToSessions,
  subjectsToIdentities,
  subjectsToRoles,
  sessionsToAuthentications,
  widgetsToAuthenticationBlocks,
};
