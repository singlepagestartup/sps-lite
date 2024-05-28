import { createMiddleware } from "hono/factory";
import QueryString from "qs";

export type MiddlewareGeneric = {
  Variables: {
    parsedBody: {
      populate: any;
      filters: any;
      orderBy: any;
      offset: any;
      limit: any;
    };
  };
};

export function middleware() {
  return createMiddleware<MiddlewareGeneric>(async (c, next) => {
    const query = c.req.query();

    const parsedQuery: {
      populate: any;
      filters: any;
      orderBy: any;
      offset: any;
      limit: any;
    } = {
      populate: undefined,
      filters: undefined,
      orderBy: undefined,
      offset: undefined,
      limit: undefined,
    };

    if (query) {
      const { populate, filters, orderBy, offset, limit } =
        QueryString.parse(query);

      parsedQuery.populate = populate;
      parsedQuery.filters = filters;
      parsedQuery.orderBy = orderBy;
      parsedQuery.offset = offset;
      parsedQuery.limit = limit;
    }

    // c.set("parsedQuery", parsedQuery);

    return next();
  });
}
