import { middleware as httpCache } from "./http-cache";
import { middleware as checkIsStringFormDataBodyHasData } from "./check-is-string-form-data-body-has-data";
import { middleware as checkIsFormDataExists } from "./check-is-form-data-exists";
import { middleware as parseQuery } from "./parse-query";
import { middleware as logger } from "./logger";
import { middleware as parseBody } from "./parse-body";
import { middleware as revalidation } from "./revalidation";
import { middleware as isAuthenticated } from "./is-authentificated";
import { middleware as session } from "./session";

export type { MiddlewaresGeneric } from "./interface";

export const middlewares = {
  httpCache,
  checkIsStringFormDataBodyHasData,
  checkIsFormDataExists,
  parseQuery,
  logger,
  parseBody,
  revalidation,
  isAuthenticated,
  session,
};
