import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-broadcast/models/channel/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";
import { MiddlewaresGeneric } from "@sps/middlewares";

export const handler = async (
  c: Context<MiddlewaresGeneric, `${string}`, BlankInput>,
  next: Next,
) => {
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    return next();
  }

  const data = JSON.parse(body["data"]);

  if (!data.channelName || !data.payload) {
    throw new HTTPException(400, {
      message: "Invalid data, channelName and payload are required.",
    });
  }

  try {
    const entity = await model.services.pushMessage({ data });

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
