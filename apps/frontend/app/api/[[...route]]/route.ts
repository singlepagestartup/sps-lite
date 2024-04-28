import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { handle } from "hono/vercel";
import { db, schema } from "../../../src/db";
import { type NextRequest } from "next/server";
import { app as spsWebsiteBuilderApp } from "@sps/sps-website-builder-backend-app";

const app = new Hono().basePath("/api");

app.route("/sps-website-builder", spsWebsiteBuilderApp);

// app.get("/posts/:id", async (c) => {
//   const id = c.req.param("id");

//   if (!id) {
//     throw new HTTPException(400, {
//       message: "Invalid id",
//     });
//   }

//   const post = await db.query.posts.findFirst({
//     where: eq(schema.posts.id, parseInt(id)),
//   });

//   return c.json({
//     data: post,
//   });
// });

// app.get("/posts", async (c) => {
//   try {
//     const posts = await db.query.spsWebsiteBuilderPage.findMany({
//       with: {
//         pagesToLayouts: {
//           with: {
//             layout: true,
//           },
//         },
//       },
//     });

//     return c.json({
//       data: posts,
//     });
//   } catch (error: any) {
//     throw new HTTPException(400, {
//       message: error.message,
//     });
//   }
// });

// app.post("/posts", async (c) => {
//   const body = await c.req.parseBody();

//   if (typeof body.data === "string") {
//     const data = JSON.parse(body.data);

//     try {
//       const newPost = await db
//         .insert(schema.posts)
//         .values({
//           title: data.title,
//           content: data.content,
//         })
//         .returning();

//       return c.json({
//         data: newPost,
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

export async function POST(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function GET(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function PATCH(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
export async function DELETE(request: NextRequest, params: any) {
  return handle(app)(request, params);
}
