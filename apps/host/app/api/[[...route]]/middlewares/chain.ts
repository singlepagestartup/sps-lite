import {
  IsAuthorizedMiddleware,
  RevalidationMiddleware,
  HTTPCacheMiddleware,
} from "@sps/middlewares";
import { MIDDLEWARE_HTTP_CACHE } from "@sps/shared-utils";
import { ParseQueryMiddleware } from "@sps/shared-backend-api";

export function chain(app: any) {
  app.use(new RevalidationMiddleware().init());
  app.use(new ParseQueryMiddleware().init());
  app.use(new IsAuthorizedMiddleware().init());

  if (MIDDLEWARE_HTTP_CACHE) {
    app.use(new HTTPCacheMiddleware().init());
  }

  return app;
}
