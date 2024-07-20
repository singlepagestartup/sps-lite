import { middleware as httpCache } from "./http-cache";
import { middleware as checkIsStringFormDataBodyHasData } from "./check-is-string-form-data-body-has-data";
import { middleware as checkIsFormDataExists } from "./check-is-form-data-exists";
export {
  Middleware as ParseQueryMiddleware,
  type IMiddlewareGeneric as IParseQueryMiddlewareGeneric,
} from "./parse-query";
export {
  Middleware as LoggerMiddleware,
  type IMiddlewareGeneric as ILoggerMiddlewareGeneric,
} from "./logger";
export {
  Middleware as ParseBodyMiddleware,
  type IGeneric as IParseBodyMiddlewareGeneric,
} from "./parse-body";
export {
  Middleware as RevalidationMiddleware,
  type IMiddlewareGeneric as IRevalidationMiddlewareGeneric,
} from "./revalidation";
import { middleware as isAuthenticated } from "./is-authentificated";
export {
  Middleware as SessionMiddleware,
  type IMiddlewareGeneric as ISessionMiddlewareGeneric,
} from "./session";

// export type { MiddlewaresGeneric } from "./interface";

export const middlewares = {
  httpCache,
  checkIsStringFormDataBodyHasData,
  checkIsFormDataExists,
  isAuthenticated,
};
