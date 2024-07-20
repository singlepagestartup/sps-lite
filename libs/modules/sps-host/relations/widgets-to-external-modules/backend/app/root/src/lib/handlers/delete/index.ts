import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-host/relations/widgets-to-external-modules/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<any, `${string}/:uuid`, BlankInput>,
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
