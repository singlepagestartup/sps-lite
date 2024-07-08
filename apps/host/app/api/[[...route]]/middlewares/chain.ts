import { middlewares } from "@sps/shared-backend-api";
import { middlewares as spsRbacSdk } from "@sps/sps-rbac/backend/sdk/root";
import { middlewares as spsBroadcastSdk } from "@sps/sps-broadcast/backend/sdk/root";
import { logger } from "hono/logger";
import { middlewares as kvMiddlewares } from "@sps/providers-kv";
import { MIDDLEWARE_HTTP_CACHE, MIDDLEWARE_LOGGER } from "@sps/shared-utils";

export function chain(app: any) {
  app.use(spsBroadcastSdk.middlewares.revalidation());
  app.use(spsRbacSdk.middlewares.session() as any);
  app.use(middlewares.parseQuery());
  app.use(middlewares.logger());
  app.use(spsRbacSdk.middlewares.isAuthenticated() as any);
  app.use(middlewares.parseBody());

  if (MIDDLEWARE_HTTP_CACHE) {
    app.use(kvMiddlewares.httpCache());
  }

  if (MIDDLEWARE_LOGGER) {
    app.use(logger());
  }

  return app;
}
