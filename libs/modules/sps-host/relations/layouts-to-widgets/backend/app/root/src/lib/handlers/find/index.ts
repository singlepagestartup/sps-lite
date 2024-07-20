import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-host/relations/layouts-to-widgets/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<any, string, BlankInput>,
  next: Next,
) => {
  try {
    const data = await model.services.find({ params: c.var.parsedQuery });

    return c.json({
      data,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
