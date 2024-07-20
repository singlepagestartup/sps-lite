import { HTTPException } from "hono/http-exception";
import { model } from "@sps/sps-third-parties/models/telegram/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<any, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const uuid = c.req.param("uuid");
  const body = await c.req.parseBody();

  if (typeof body["data"] !== "string") {
    throw new HTTPException(400, {
      message: "Invalid data",
    });
  }

  const data = JSON.parse(body["data"]);

  if (!data.message) {
    return c.json(
      {
        message: "No data.message provided in data",
      },
      {
        status: 400,
      },
    );
  }

  if (!data.to) {
    return c.json(
      {
        message: "No data.to provided in data",
      },
      {
        status: 400,
      },
    );
  }

  if (typeof data.message !== "string") {
    return c.json(
      {
        message: "Invalid data.message, must be a string",
      },
      {
        status: 400,
      },
    );
  }

  if (typeof data.to !== "string") {
    return c.json(
      {
        message: "Invalid data.to, must be a string",
      },
      {
        status: 400,
      },
    );
  }

  if (!uuid) {
    return c.json(
      {
        message: "Invalid id",
      },
      {
        status: 400,
      },
    );
  }

  const entity = await model.services.findById({
    id: uuid,
    params: c.var.parsedQuery,
  });

  if (!entity?.token) {
    throw new HTTPException(400, {
      message: "Invalid token",
    });
  }

  await model.services.sendMessage({
    id: uuid,
    message: data.message,
    to: data.to,
  });

  return c.json({
    data: {
      ok: true,
    },
  });
};
