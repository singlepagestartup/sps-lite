import { Context, HonoRequest } from "hono";
import { BlankInput, BlankSchema, Env, Next } from "hono/types";

export const middleware = async (
  c: Context<Env, "/", BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    return c.json(
      {
        message: "Invalid body",
      },
      {
        status: 400,
      },
    );
  }

  await next();
};
