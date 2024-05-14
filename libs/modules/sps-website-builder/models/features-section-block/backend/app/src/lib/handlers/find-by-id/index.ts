import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder-models-features-section-block-backend-model";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<Env, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const uuid = c.req.param("uuid");

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const data = await model.services.findById({ id: uuid });

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
