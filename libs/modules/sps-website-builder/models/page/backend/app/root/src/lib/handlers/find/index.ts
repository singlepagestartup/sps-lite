import { HTTPException } from "hono/http-exception";
import { services } from "../../services";
import { Context, Env } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<Env, string, BlankInput>,
  next: Next,
) => {
  try {
    const data = await services.find();

    return c.json({
      data,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
