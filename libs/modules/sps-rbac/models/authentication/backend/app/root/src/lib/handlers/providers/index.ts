import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac-models-authentication-backend-model";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/shared-backend-api";

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
    const entity = await model.services.providers({ data });

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
