import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/widget/backend/model/root";
import { Context } from "hono";
import { Next } from "hono/types";

export const handler = async (c: Context, next: Next) => {
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
