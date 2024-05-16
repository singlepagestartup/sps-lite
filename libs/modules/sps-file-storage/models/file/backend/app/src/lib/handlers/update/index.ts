import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage-models-file-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";

export const handler = async (
  c: Context<Env, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
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

    const entity = await model.services.update({ id: uuid, data });

    return c.json({
      data: entity,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};

// export const handler = async (
//   c: Context<Env, `${string}/:uuid`, BlankInput>,
//   next: Next,
// ) => {
//   try {
//     const uuid = c.req.param("uuid");
//     const body = await c.req.parseBody();

//     if (!uuid) {
//       return c.json(
//         {
//           message: "Invalid id",
//         },
//         {
//           status: 400,
//         },
//       );
//     }

//     if (typeof body["data"] !== "string") {
//       return c.json(
//         {
//           message: "Invalid body",
//         },
//         {
//           status: 400,
//         },
//       );
//     }

//     const filesArray = [body["files"]];

//     for (const file of filesArray) {
//       console.log(file);
//       if (Array.isArray(file)) {
//         return;
//       }

//       if (typeof file === "string") {
//         return;
//       }

//       const buffer = await (file as File).arrayBuffer();

//       // const root = path.join(process.cwd());
//       const root = "";
//       const storagePath = "public/sps-file-storage";
//       const filePath = path.join(root, storagePath, file.name);

//       await fs.writeFile(filePath, Buffer.from(buffer));

//       const createdFileUrl = path.join("/", storagePath, file.name);

//       if (typeof body["data"] !== "string") {
//         return next();
//       }

//       const data = JSON.parse(body["data"]);
//       data["url"] = createdFileUrl;

//       try {
//         const entity = await model.services.update({ id: uuid, data });

//         return c.json({
//           data: entity,
//         });
//       } catch (error: any) {
//         throw new HTTPException(400, {
//           message: error.message,
//         });
//       }
//     }
//   } catch (error: any) {
//     throw new HTTPException(400, {
//       message: error.message,
//     });
//   }
// };
