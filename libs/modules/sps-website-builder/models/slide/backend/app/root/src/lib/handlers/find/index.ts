import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-website-builder/models/slide/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
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
