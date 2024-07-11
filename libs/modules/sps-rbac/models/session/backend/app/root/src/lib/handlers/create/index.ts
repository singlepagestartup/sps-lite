import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-rbac/models/session/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const handler = async (
  c: Context<MiddlewaresGeneric, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    throw new HTTPException(400, {
      message: "Invalid data",
    });
  }

  const data = JSON.parse(body["data"]);

  try {
    const entity = await model.services.create({ data });

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
