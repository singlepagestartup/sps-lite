import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { Table, db, transformData, populate, modelName } from "./model";
import {
  checkIsStringFormDataBodyHasData,
  checkIsFormDataExists,
} from "@sps/shared-backend-api";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    const data = await db.query.PageTable.findMany({
      with: {
        PagesToLayouts: {
          with: {
            layout: true,
          },
        },
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

app.get("/:uuid", async (c) => {
  const uuid = c.req.param("uuid");

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  async function getById(id: string, withInput: any) {
    return db.query[modelName].findFirst({
      where: eq(Table.id, id),
      with: withInput,
    });
  }

  const data = await getById(uuid, populate);

  const transformedData = transformData({ data });

  return c.json({
    data: transformedData,
  });
});

app.patch(
  "/:uuid",
  checkIsFormDataExists,
  checkIsStringFormDataBodyHasData,
  async (c) => {
    try {
      const uuid = c.req.param("uuid");
      const body = await c.req.parseBody();

      if (!uuid) {
        return c.json(
          {
            message: "Invalid id",
          },
          {
            status: 400,
          },
        );
      }

      if (typeof body["data"] !== "string") {
        return c.json(
          {
            message: "Invalid body",
          },
          {
            status: 400,
          },
        );
      }

      const data = JSON.parse(body["data"]);

      const entity = await db
        .update(Table)
        .set(data)
        .where(eq(Table.id, uuid))
        .returning();

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  },
);

app.post(
  "/",
  checkIsFormDataExists,
  checkIsStringFormDataBodyHasData,
  async (c, next) => {
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      return next();
    }

    const data = JSON.parse(body["data"]);

    try {
      const entity = await db.insert(Table).values(data).returning();

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  },
);
