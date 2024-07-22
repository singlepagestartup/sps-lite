import "reflect-metadata";
import { Context, Env, Hono, Next } from "hono";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
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
import { SessionMiddleware } from "@sps/middlewares";

@injectable()
export class App implements IDefaultApp<Env> {
  hono: Hono<Env>;
  exceptionFilter: IExceptionFilter;

  constructor(@inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter) {
    this.hono = new Hono<Env>();
    this.exceptionFilter = exceptionFilter;
  }

  public async init() {
    // this.hono.use(async (c: Context, next: Next) => {
    //   const path = c.req.path;
    //   console.log("RBAC Middleware", path);
    //   await next();
    // });
    this.useRoutes();
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  useRoutes() {
    this.hono.mount("/widgets", widget.hono.fetch);
    this.hono.mount("/roles", role.hono.fetch);
    this.hono.mount("/authentication-blocks", authenticationBlock.hono.fetch);
    this.hono.mount("/subjects", subject.hono.fetch);
    this.hono.mount("/sessions", session.hono.fetch);
    this.hono.mount("/permissions", permission.hono.fetch);
    this.hono.mount("/identities", identity.hono.fetch);
    this.hono.mount("/authentications", authentication.hono.fetch);
    this.hono.mount("/roles-to-permissions", rolesToPermissions.hono.fetch);
    this.hono.mount(
      "/sessions-to-authentications",
      sessionsToAuthentications.hono.fetch,
    );
    this.hono.mount("/subjects-to-identities", subjectsToIdentities.hono.fetch);
    this.hono.mount("/subjects-to-roles", subjectsToRoles.hono.fetch);
    this.hono.mount("/subjects-to-sessions", subjectsToSessions.hono.fetch);
    this.hono.mount(
      "/widgets-to-authentication-blocks",
      widgetsToAuthenticationBlocks.hono.fetch,
    );
  }
}
