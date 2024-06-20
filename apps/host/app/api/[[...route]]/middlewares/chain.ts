import { middlewares } from "@sps/shared-backend-api";
import { middlewares as spsRbacSdk } from "@sps/sps-rbac/backend/sdk/root";
import { logger } from "hono/logger";
import { middlewares as kvMiddlewares } from "@sps/sps-kv-provider";

export function chain(app: any) {
  app.use(spsRbacSdk.middlewares.session() as any);
  app.use(middlewares.parseQuery());
  app.use(middlewares.logger());
  app.use(spsRbacSdk.middlewares.isAuthenticated() as any);
  app.use(middlewares.parseBody());
  app.use(kvMiddlewares.httpCache());

  if (process.env["MIDDLEWARE_LOGGER"]) {
    app.use(logger());
  }

  return app;
}
