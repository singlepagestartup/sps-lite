import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/authentication/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  try {
    const session = c.var.session;

    if (!session) {
      if (!session) {
        throw new HTTPException(401, {
          message: "Unauthorized",
        });
      }
    }

    const data = await model.services.logout({
      session,
    });

    return c.json({
      data,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
