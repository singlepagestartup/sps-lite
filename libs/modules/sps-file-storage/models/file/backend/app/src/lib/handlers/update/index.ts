import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage-models-file-backend-model";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

export const handler = async (
  c: Context<MiddlewaresGeneric, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  try {
    const uuid = c.req.param("uuid");

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

    if (!c.var.parsedBody.files) {
      const entity = await model.services.update({
        id: uuid,
        data: c.var.parsedBody.data,
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }

    for (const [name, file] of Object.entries(c.var.parsedBody.files)) {
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

      const data = c.var.parsedBody.data ?? {};
      data[name] = createdFileUrl;

      const entity = await model.services.update({ id: uuid, data });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }
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
