import { Context } from "hono";
import { BlankInput, Env, Next } from "hono/types";

export const middleware = async (
  c: Context<Env, "/", BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  if (!body) {
    await next();
  }

  await next();
};
