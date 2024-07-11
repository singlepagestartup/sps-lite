import { logger } from "hono/logger";
import { middlewares } from "@sps/middlewares";
import { MIDDLEWARE_HTTP_CACHE, MIDDLEWARE_LOGGER } from "@sps/shared-utils";

export function chain(app: any) {
  app.use(middlewares.revalidation());
  app.use(middlewares.session() as any);
  app.use(middlewares.parseQuery());
  app.use(middlewares.logger());
  app.use(middlewares.isAuthenticated() as any);
  app.use(middlewares.parseBody());

  if (MIDDLEWARE_HTTP_CACHE) {
    app.use(middlewares.httpCache());
  }

  if (MIDDLEWARE_LOGGER) {
    app.use(logger());
  }

  return app;
}
