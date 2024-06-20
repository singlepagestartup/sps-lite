import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/authentication/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";
import { SessionMiddlewareGeneric } from "@sps/sps-rbac/backend/sdk/root";

export const handler = async (
  c: Context<MiddlewaresGeneric & SessionMiddlewareGeneric, string, BlankInput>,
  next: Next,
) => {
  try {
    const secretKey = c.req.header("X-SPS-RBAC-SECRET-KEY");

    if (secretKey && secretKey !== process.env["SPS_RBAC_SECRET_KEY"]) {
      throw new HTTPException(401, {
        message: "Unauthorized",
      });
    }

    if (secretKey && secretKey === process.env["SPS_RBAC_SECRET_KEY"]) {
      return c.json({
        data: {
          message: "Permission granted.",
        },
      });
    }

    const session = c.var.session;

    if (!session) {
      if (!session) {
        throw new HTTPException(401, {
          message: "Unauthorized",
        });
      }
    }

    const data = await model.services.isAuthenticatated({
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
