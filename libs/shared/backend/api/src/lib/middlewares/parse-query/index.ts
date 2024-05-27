import { createMiddleware } from "hono/factory";
import QueryString from "qs";

export type MiddlewareGeneric = {
  Variables: {
    parsedQuery: {
      populate: any;
      filters: any;
    };
  };
};

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const query = c.req.query();

    const parsedQuery: { populate: any; filters: any } = {
      populate: undefined,
      filters: undefined,
    };

    if (query) {
      const { populate, filters } = QueryString.parse(query);

      parsedQuery.populate = populate;
      parsedQuery.filters = filters;
    }

    c.set("parsedQuery", parsedQuery);

    return next();
  });
}
