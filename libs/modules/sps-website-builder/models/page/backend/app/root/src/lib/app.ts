import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { schema } from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";
import { db, model, modelExtended } from "./db";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    // const data = await db.query.model.findMany({
    //   with: {
    //     pagesToLayouts: true,
    //   },
    // });

    // const cf = modelExtended

    const data = await db.select().from(model);

    // const data = await db.query.plain.findMany({
    //   with: {
    //     pagesToLayouts: true,
    //   },
    // });

    return c.json({
      data,
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

  const data = await db.query.model.findFirst({
    where: eq(schema.plain.id, parseInt(id)),
    with: {
      pagesToLayouts: true,
    },
  });

  return c.json({
    data,
  });
});

// app.get("/posts", async (c) => {
//   try {
//     const posts = await db.query.posts.findMany();

//     return c.json({
//       data: posts,
//     });
//   } catch (error: any) {
//     throw new HTTPException(400, {
//       message: error.message,
//     });
//   }
// });

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
