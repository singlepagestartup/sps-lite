import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { routes } from "./routes";
import { db, schema } from "@sps/sps-db-provider";
import QueryString from "qs";
import { parseQueryFilters } from "@sps/shared-backend-api";
import { eq } from "drizzle-orm";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    return c.json({
      data: "sps-website-builder",
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});

for (const route in routes) {
  app.route(route, routes[route as keyof typeof routes]);
}

app.get("/pages-to-layouts", async (c, next) => {
  try {
    const query = c.req.query();
    const parsedQuery = QueryString.parse(query);

    let filter: any = undefined;
    if (parsedQuery["filters"]) {
      const queryFilters = parsedQuery["filters"];
      filter = parseQueryFilters({
        queryFilters,
        Table: schema.SPSWBPagesToLayouts,
      });
    }

    const data = await db.query.SPSWBPagesToLayouts.findMany({
      where: filter,
      with: {
        page: true,
        layout: true,
      },
    });

    return c.json({
      data,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});

app.get("/pages-to-layouts/:uuid", async (c, next) => {
  const uuid = c.req.param("uuid");

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const data = await db.query.SPSWBPagesToLayouts.findFirst({
    where: eq(schema.SPSWBPagesToLayouts.id, uuid),
    with: {
      page: true,
      layout: true,
    },
  });

  if (!data || !Object.keys(data).length) {
    return c.json(
      {
        message: "Not found",
      },
      404,
    );
  }

  return c.json({
    data,
  });
});

app.post("/pages-to-layouts", async (c, next) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    return next();
  }

  const data = JSON.parse(body["data"]);

  try {
    const entity = await db
      .insert(schema.SPSWBPagesToLayouts)
      .values(data)
      .returning();

    return c.json(
      {
        data: entity,
      },
      201,
    );
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});
