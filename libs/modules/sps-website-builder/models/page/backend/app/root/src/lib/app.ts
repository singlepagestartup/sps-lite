import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { eq, getTableColumns } from "drizzle-orm";
import { Table, db, Relations } from "./model";
import {
  checkIsStringFormDataBodyHasData,
  checkIsFormDataExists,
} from "@sps/shared-backend-api";
import { getTableConfig } from "drizzle-orm/pg-core";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    // const data = await db.select().from(Table);
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

  type WithInput = NonNullable<
    Parameters<(typeof db)["query"]["PageTable"]["findFirst"]>[0]
  >["with"];

  async function getById<TWith extends WithInput>(
    id: string,
    withInput: TWith,
  ) {
    return db.query.PageTable.findFirst({
      where: eq(Table.id, id),
      with: withInput,
    });
  }

  // const { foreignKeys } = getTableConfig(Relations);
  // Relations.$brand
  // console.log(`🚀 ~ app.get ~ Relations.$brand:`, Relations);
  // console.log(`🚀 ~ app.get ~ foreignKeys:`, foreignKeys);
  // const cols = getTableColumns(Relations.table);
  // console.log(`🚀 ~ app.get ~ cols:`, cols);
  // console.log(`🚀 ~ app.get ~ cf:`, cf);

  // cf.foreignKeys.forEach((fk) => {
  //   console.log(`🚀 ~ app.get ~ fk:`, fk);
  // });

  // const data = await db.query.PageTable.findFirst({
  //   where: eq(Table.id, uuid),
  //   with: {
  //     ["PagesToLayouts"]: {
  //       with: {
  //         layout: true,
  //       },
  //     },
  //   },
  // });

  const populate: WithInput = {
    ["PagesToLayouts"]: {
      with: {
        ["layout"]: true,
      },
    },
  };

  const data = await getById(uuid, populate);

  const preparedData = {
    ...data,
    layouts: data?.["PagesToLayouts"].map((item: any) => item["layout"]),
  };
  delete preparedData.PagesToLayouts;

  return c.json({
    data: preparedData,
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
