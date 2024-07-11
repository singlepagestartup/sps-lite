import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/permission/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

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

  const data = await model.services.delete({ id: uuid });

  return c.json({
    data,
  });
};
