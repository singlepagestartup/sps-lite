import { HTTPException } from "hono/http-exception";
import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { model } from "./model";

export const app = new Hono();

app.get("/", async (c) => {
  try {
    const data = await model.query.findMany({
      with: {
        PageToLayoutRelation: true,
      },
    });

    // const data = await model.query.findMany({
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

app.get("/:uuid", async (c) => {
  const uuid = c.req.param("uuid");

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const data = await model.select({
    where: eq(model.schema.id, uuid),
    with: {
      pagesToLayouts: true,
    },
  });
  // const data = await model.select({
  //   where: eq(model.schema.id, parseInt(id)),
  //   with: {
  //     pagesToLayouts: true,
  //   },
  // });

  console.log(`🚀 ~ app.get ~ data:`, data);

  return c.json({
    data,
  });
});

// // app.get("/posts", async (c) => {
// //   try {
// //     const posts = await db.query.posts.findMany();

// //     return c.json({
// //       data: posts,
// //     });
// //   } catch (error: any) {
// //     throw new HTTPException(400, {
// //       message: error.message,
// //     });
// //   }
// // });

// app.post("/", async (c) => {
//   const body = await c.req.parseBody();

//   if (typeof body["data"] === "string") {
//     const data = JSON.parse(body["data"]);

//     try {
//       const entity = await model.insert(data).returning();

//       return c.json({
//         data: entity,
//       });
//     } catch (error: any) {
//       throw new HTTPException(400, {
//         message: error.message,
//       });
//     }
//   }

//   throw new HTTPException(400, {
//     message: "Invalid body",
//   });
// });
