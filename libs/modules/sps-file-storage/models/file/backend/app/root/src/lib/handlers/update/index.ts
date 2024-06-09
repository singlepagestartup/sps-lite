import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage-models-file-backend-model";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { getUniqueFileName } from "@sps/sps-backend-utils";

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

      const extension = file.name.split(".").pop();

      if (!extension) {
        throw new Error("Invalid file extension");
      }

      const root = process.cwd();
      const cuttedStoragePath = "images";
      const storagePath = `public/${cuttedStoragePath}`;

      const fileName = await getUniqueFileName({ extension });
      const filePath = path.join(root, storagePath, fileName + "." + extension);

      await fs.writeFile(filePath, Buffer.from(buffer));

      const createdFileUrl = path.join(
        "/",
        cuttedStoragePath,
        fileName + "." + extension,
      );

      const data = c.var.parsedBody.data ?? {};
      data[name] = createdFileUrl;

      const previous = await model.services.findById({ id: uuid });

      const entity = await model.services.update({ id: uuid, data });

      if (previous?.file) {
        const root = process.cwd();
        const filePath = path.join(root, "public", previous.file);

        try {
          await fs.unlink(filePath);
        } catch (error: any) {
          c.var.log("error", error.toString());
        }
      }

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }

    return;
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
