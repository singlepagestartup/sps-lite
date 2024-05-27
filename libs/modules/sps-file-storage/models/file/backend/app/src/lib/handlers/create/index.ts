import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage-models-file-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    return next();
  }

  const data = JSON.parse(body["data"]);

  try {
    const entity = await model.services.create({ data });

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
};

// export const handler = async (
//   c: Context<Env, string, BlankInput>,
//   next: Next,
// ) => {
//   const body = await c.req.parseBody();

//   const filesArray = [body["files"]];

//   for (const file of filesArray) {
//     console.log(file);
//     if (Array.isArray(file)) {
//       return;
//     }

//     if (typeof file === "string") {
//       return;
//     }

//     const buffer = await (file as File).arrayBuffer();

//     // const root = path.join(process.cwd());
//     const root = "";
//     const storagePath = "public/sps-file-storage";
//     const filePath = path.join(root, storagePath, file.name);

//     await fs.writeFile(filePath, Buffer.from(buffer));

//     const createdFileUrl = path.join("/", storagePath, file.name);

//     if (typeof body["data"] !== "string") {
//       return next();
//     }

//     const data = JSON.parse(body["data"]);
//     data["url"] = createdFileUrl;

//     try {
//       const entity = await model.services.create({ data });

//       return c.json(
//         {
//           data: entity,
//         },
//         201,
//       );
//     } catch (error: any) {
//       throw new HTTPException(400, {
//         message: error.message,
//       });
//     }
//   }
// };
