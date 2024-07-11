import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage/models/file/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";
import { MiddlewaresGeneric } from "@sps/middlewares";
import process from "process";
import { getUniqueFileName } from "@sps/sps-backend-utils";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  try {
    if (!c.var.parsedBody) {
      throw new HTTPException(400, {
        message: "Invalid body",
      });
    }

    if (!c.var.parsedBody.files) {
      const entity = await model.services.create({
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
      const cuttedStoragePath = "images";
      const storagePath = `public/${cuttedStoragePath}`;

      const data = c.var.parsedBody.data ?? {};
      data[name] = "";
      const createdEntity = await model.services.create({ data });

      const extension = file.name.split(".").pop();

      if (!extension) {
        throw new Error("Invalid file extension");
      }

      const fileName = await getUniqueFileName({ extension });
      const filePath = path.join(root, storagePath, fileName + "." + extension);

      await fs.writeFile(filePath, Buffer.from(buffer));

      const createdFileUrl = path.join(
        "/",
        cuttedStoragePath,
        fileName + "." + extension,
      );

      data[name] = createdFileUrl;
      const entity = await model.services.update({
        id: createdEntity.id,
        data,
      });

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
