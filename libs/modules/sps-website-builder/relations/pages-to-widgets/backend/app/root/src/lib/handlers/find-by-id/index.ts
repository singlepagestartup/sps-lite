import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder/relations/pages-to-widgets/backend/model/root";
import { Context, Env } from "hono";
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

  const data = await model.services.findById({
    id: uuid,
    params: c.var.parsedQuery,
  });

  if (!data || !Object.keys(data).length) {
    return c.json(
      {
        message: "Not found",
      },
      404,
    );
  }

  return c.json({
    data,
  });
};
