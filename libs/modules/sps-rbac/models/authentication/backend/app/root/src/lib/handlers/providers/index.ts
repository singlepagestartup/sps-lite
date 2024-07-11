import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/authentication/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const handler = async (
  c: Context<MiddlewaresGeneric, `${string}/providers/:provider`, BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    return next();
  }

  const data = JSON.parse(body["data"]);

  try {
    const session = c.var.session;

    if (!session) {
      throw new HTTPException(401, {
        message: "No session provided",
      });
    }

    const provider = c.req.param("provider").replaceAll("-", "_");

    if (!provider) {
      throw new HTTPException(400, {
        message: "No provider provided",
      });
    }

    if (provider !== "login_and_password") {
      throw new HTTPException(400, {
        message: "Invalid provider",
      });
    }

    const entity = await model.services.providers({ data, session, provider });

    return c.json(
      {
        data: entity,
      },
      201,
    );
  } catch (error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
};
