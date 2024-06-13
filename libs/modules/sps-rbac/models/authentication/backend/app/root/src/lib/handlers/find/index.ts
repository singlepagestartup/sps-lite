import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac-models-authentication-backend-model";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { SessionMiddlewareGeneric } from "@sps/sps-rbac-backend-sdk";

export const handler = async (
  c: Context<MiddlewaresGeneric & SessionMiddlewareGeneric, string, BlankInput>,
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
