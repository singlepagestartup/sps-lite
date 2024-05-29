import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage-models-file-backend-model";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import path from "path";
import fs from "fs/promises";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import process from "process";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  try {
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
      const cuttedStoragePath = "sps-file-storage";
      const storagePath = `public/${cuttedStoragePath}`;
      const filePath = path.join(root, storagePath, file.name);

      await fs.writeFile(filePath, Buffer.from(buffer));

      const createdFileUrl = path.join("/", cuttedStoragePath, file.name);

      const data = c.var.parsedBody.data ?? {};
      data[name] = createdFileUrl;

      const entity = await model.services.create({ data });

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
