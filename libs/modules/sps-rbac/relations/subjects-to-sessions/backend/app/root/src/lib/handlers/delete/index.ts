import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

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
