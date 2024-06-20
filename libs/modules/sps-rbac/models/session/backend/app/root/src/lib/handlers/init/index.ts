import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/session/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

export const handler = async (
  c: Context<MiddlewaresGeneric, string, BlankInput>,
  next: Next,
) => {
  try {
    return c.json({
      ok: true,
    });
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
