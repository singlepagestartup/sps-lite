import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder-models-layout-backend-model";
import { Table } from "@sps/sps-website-builder-models-layout-backend-schema";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import QueryString from "qs";
import { MiddlewaresGeneric, parseQueryFilters } from "@sps/shared-backend-api";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
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
