import { HTTPException } from "hono/http-exception";
import { services } from "../../services";
import { Context, Env } from "hono";
import { BlankInput } from "hono/types";
import { Next } from "koa";

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

  const data = await services.findById({ id: uuid });

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
