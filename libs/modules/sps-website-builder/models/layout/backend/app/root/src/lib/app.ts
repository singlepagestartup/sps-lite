import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { db, model, modelExtended, schema } from "./db";
import { eq } from "lodash";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    return c.json({
      data: "layout",
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
});

app.get("/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const data = await db.query.model.findFirst({});

  return c.json({
    data,
  });
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] === "string") {
    const data = JSON.parse(body["data"]);

    try {
      const entity = await db
        .insert(model)
        .values({
          title: data.title,
          description: data.description,
        })
        .returning();

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
