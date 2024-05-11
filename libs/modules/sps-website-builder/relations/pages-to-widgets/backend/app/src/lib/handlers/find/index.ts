import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder-relations-pages-to-widgets-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import { Table } from "@sps/sps-website-builder-relations-pages-to-widgets-backend-schema";
import QueryString from "qs";
import { parseQueryFilters } from "@sps/shared-backend-api";

export const handler = async (
  c: Context<Env, string, BlankInput>,
  next: Next,
) => {
  try {
    const query = c.req.query();
    const parsedQuery = QueryString.parse(query);

    let filter: any = undefined;
    if (parsedQuery["filters"]) {
      const queryFilters = parsedQuery["filters"];
      filter = parseQueryFilters({
        queryFilters,
        Table,
      });
    }

    const data = await model.services.find({ filter });

    return c.json({
      data,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
