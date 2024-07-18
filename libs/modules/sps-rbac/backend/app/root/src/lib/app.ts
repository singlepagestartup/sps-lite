import "reflect-metadata";
import { Context, Hono, Next } from "hono";
import { MiddlewaresGeneric } from "@sps/middlewares";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { app as widget } from "@sps/sps-rbac/models/widget/backend/app/root";
// import { app as role } from "@sps/sps-rbac/models/role/backend/app/root";
// import { app as subject } from "@sps/sps-rbac/models/subject/backend/app/root";
// import { app as session } from "@sps/sps-rbac/models/session/backend/app/root";
// import { app as permission } from "@sps/sps-rbac/models/permission/backend/app/root";
// import { app as identity } from "@sps/sps-rbac/models/identity/backend/app/root";
// import { app as authentication } from "@sps/sps-rbac/models/authentication/backend/app/root";

@injectable()
export class App implements IDefaultApp<MiddlewaresGeneric> {
  hono: Hono<MiddlewaresGeneric>;
  exceptionFilter: IExceptionFilter;

  constructor(@inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter) {
    this.hono = new Hono<MiddlewaresGeneric>();
    this.exceptionFilter = exceptionFilter;
  }

  public async init() {
    this.hono.use(async (c: Context, next: Next) => {
      const path = c.req.path;
      console.log("RBAC Middleware", path);
      await next();
    });
    this.useRoutes();
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  useRoutes() {
    this.hono.mount("/widgets", widget.hono.fetch);
    // this.hono.mount("/roles", role.hono.fetch);
    // this.hono.mount("/subjects", subject.hono.fetch);
    // this.hono.mount("/sessions", session.hono.fetch);
    // this.hono.mount("/permissions", permission.hono.fetch);
    // this.hono.mount("/identities", identity.hono.fetch);
    // this.hono.mount("/authentications", authentication.hono.fetch);
  }
}
