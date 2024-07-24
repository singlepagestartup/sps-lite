import { app as widget } from "@sps/sps-rbac/models/widget/backend/app/root";
import { app as role } from "@sps/sps-rbac/models/role/backend/app/root";
import { app as subject } from "@sps/sps-rbac/models/subject/backend/app/root";
import { app as session } from "@sps/sps-rbac/models/session/backend/app/root";
import { app as permission } from "@sps/sps-rbac/models/permission/backend/app/root";
import { app as identity } from "@sps/sps-rbac/models/identity/backend/app/root";
import { app as authentication } from "@sps/sps-rbac/models/authentication/backend/app/root";
import { app as authenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/app/root";
import { app as rolesToPermissions } from "@sps/sps-rbac/relations/roles-to-permissions/backend/app/root";
import { app as sessionsToAuthentications } from "@sps/sps-rbac/relations/sessions-to-authentications/backend/app/root";
import { app as subjectsToIdentities } from "@sps/sps-rbac/relations/subjects-to-identities/backend/app/root";
import { app as subjectsToRoles } from "@sps/sps-rbac/relations/subjects-to-roles/backend/app/root";
import { app as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/app/root";
import { app as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/backend/app/root";
import { DefaultApp } from "@sps/shared-backend-api";

export class Apps {
  apps: { type: "model" | "relation"; route: string; app: DefaultApp<any> }[] =
    [];

  constructor() {
    this.bindApps();
  }

  bindApps() {
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
    this.apps.push({
      type: "model",
      route: "/roles",
      app: role,
    });
    this.apps.push({
      type: "model",
      route: "/authentication-blocks",
      app: authenticationBlock,
    });
    this.apps.push({
      type: "model",
      route: "/subjects",
      app: subject,
    });
    this.apps.push({
      type: "model",
      route: "/sessions",
      app: session,
    });
    this.apps.push({
      type: "model",
      route: "/permissions",
      app: permission,
    });
    this.apps.push({
      type: "model",
      route: "/identities",
      app: identity,
    });
    this.apps.push({
      type: "model",
      route: "/authentications",
      app: authentication,
    });
    this.apps.push({
      type: "relation",
      route: "/roles-to-permissions",
      app: rolesToPermissions,
    });
    this.apps.push({
      type: "relation",
      route: "/sessions-to-authentications",
      app: sessionsToAuthentications,
    });
    this.apps.push({
      type: "relation",
      route: "/subjects-to-identities",
      app: subjectsToIdentities,
    });
    this.apps.push({
      type: "relation",
      route: "/subjects-to-roles",
      app: subjectsToRoles,
    });
    this.apps.push({
      type: "relation",
      route: "/subjects-to-sessions",
      app: subjectsToSessions,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-authentication-blocks",
      app: widgetsToAuthenticationBlocks,
    });
  }
}
