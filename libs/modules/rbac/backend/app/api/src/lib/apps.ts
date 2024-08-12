import { app as widget } from "@sps/rbac/models/widget/backend/app/root";
import { app as role } from "@sps/rbac/models/role/backend/app/root";
import { app as subject } from "@sps/rbac/models/subject/backend/app/root";
import { app as session } from "@sps/rbac/models/session/backend/app/root";
import { app as action } from "@sps/rbac/models/action/backend/app/root";
import { app as identity } from "@sps/rbac/models/identity/backend/app/root";
import { app as rolesToActions } from "@sps/rbac/relations/roles-to-actions/backend/app/root";
import { app as subjectsToIdentities } from "@sps/rbac/relations/subjects-to-identities/backend/app/root";
import { app as subjectsToRoles } from "@sps/rbac/relations/subjects-to-roles/backend/app/root";
import { app as subjectsToSessions } from "@sps/rbac/relations/subjects-to-sessions/backend/app/root";
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
      route: "/actions",
      app: action,
    });
    this.apps.push({
      type: "model",
      route: "/identities",
      app: identity,
    });
    this.apps.push({
      type: "relation",
      route: "/roles-to-actions",
      app: rolesToActions,
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
  }
}
