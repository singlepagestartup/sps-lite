import { model as rolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/backend/model/root";
import { model as permission } from "@sps/sps-rbac/models/permission/backend/model/root";
import { model as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/model/root";
import { model as subjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/backend/model/root";
import { model as subjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/backend/model/root";
import { model as subject } from "@sps/sps-rbac/models/subject/backend/model/root";
import { model as sessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/backend/model/root";

import { model as session } from "@sps/sps-rbac/models/session/backend/model/root";
import { model as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/backend/model/root";
import { model as widget } from "@sps/sps-rbac/models/widget/backend/model/root";
import { model as authenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/model/root";

import { model as identity } from "@sps/sps-rbac/models/identity/backend/model/root";

import { model as authentication } from "@sps/sps-rbac/models/authentication/backend/model/root";
import { model as role } from "@sps/sps-rbac/models/role/backend/model/root";
export const models = {
  rolesToPermissions,
  permission,
  subjectsToSessions,
  subjectsToIdentities,
  subjectsToRoles,
  subject,
  sessionsToAuthentications,

  session,
  widgetsToAuthenticationBlocks,
  widget,
  authenticationBlock,

  identity,

  authentication,
  role,
};
