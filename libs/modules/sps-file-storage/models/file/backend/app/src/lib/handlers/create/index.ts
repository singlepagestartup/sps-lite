import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage-models-file-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

// export const handler = async (
//   c: Context<MiddlewaresGeneric, string, BlankInput>,
//   next: Next,
// ) => {
//   const body = await c.req.parseBody();

//   if (typeof body["data"] !== "string") {
//     return next();
//   }

//   const data = JSON.parse(body["data"]);

//   try {
//     const entity = await model.services.create({ data });

//     return c.json(
//       {
//         data: entity,
//       },
//       201,
//     );
//   } catch (error: any) {
//     throw new HTTPException(400, {
//       message: error.message,
//     });
//   }
// };

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  const uploadableFields: string[] = [];

  Object.keys(body).forEach((key) => {
    if (body[key] instanceof File) {
      uploadableFields.push(key);
    }
  });

  const filesArray = uploadableFields.map((key) => body[key]);

  for (const file of filesArray) {
    if (Array.isArray(file)) {
      return;
    }

    if (typeof file === "string") {
      return;
    }

    const buffer = await (file as File).arrayBuffer();

    const root = process.cwd();
    const cuttedStoragePath = "sps-file-storage";
    const storagePath = `public/${cuttedStoragePath}`;
    const filePath = path.join(root, storagePath, file.name);

    await fs.writeFile(filePath, Buffer.from(buffer));

    const createdFileUrl = path.join("/", cuttedStoragePath, file.name);

    if (body["data"] && typeof body["data"] !== "string") {
      return next();
    }

    const data = body["data"] ? JSON.parse(body["data"]) : {};
    data["url"] = createdFileUrl;

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
  }
};
