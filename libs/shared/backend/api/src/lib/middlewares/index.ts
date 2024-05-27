import { middleware as checkIsStringFormDataBodyHasData } from "./check-is-string-form-data-body-has-data";
import { middleware as checkIsFormDataExists } from "./check-is-form-data-exists";
import { middleware as parseQueryMiddleware } from "./parse-query";
import { middleware as loggerMiddleware } from "./logger";

export const middlewares = {
  checkIsStringFormDataBodyHasData: checkIsStringFormDataBodyHasData,
  checkIsFormDataExists: checkIsFormDataExists,
  parseQuery: parseQueryMiddleware,
  logger: loggerMiddleware,
};
