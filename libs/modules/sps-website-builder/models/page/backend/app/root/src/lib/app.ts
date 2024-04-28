import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { model } from "./model";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    const data = await model.query.findMany({
      with: {
        PageToLayoutRelation: {
          with: {
            layout: true,
            page: true,
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

  const data = await model.query.findMany({
    where: eq(model.schema.id, uuid),
    with: {
      PageToLayoutRelation: {
        with: {
          layout: true,
          page: true,
        },
      },
    },
  });

  return c.json({
    data,
  });
});

app.patch("/:uuid", async (c) => {
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

    const entity = await model
      .update(data)
      .where(eq(model.schema.id, uuid))
      .returning();

    return c.json({
      data: entity,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] === "string") {
    const data = JSON.parse(body["data"]);

    try {
      const entity = await model.insert(data).returning();

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  throw new HTTPException(400, {
    message: "Invalid body",
  });
});
