import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-file-storage/models/file/backend/model/root";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import path from "path";
import fs from "fs/promises";

export const handler = async (
  c: Context<MiddlewaresGeneric, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const uuid = c.req.param("uuid");

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const entity = await model.services.findById({ id: uuid });

  const data = await model.services.delete({ id: uuid });

  if (entity?.file) {
    const root = process.cwd();
    const filePath = path.join(root, "public", entity.file);

    try {
      await fs.unlink(filePath);
    } catch (error: any) {
      c.var.log("error", error.message);
    }
  }

  return c.json({
    data,
  });
};
