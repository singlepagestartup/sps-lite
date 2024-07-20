import { HTTPException } from "hono/http-exception";
import {
  model,
  Telegram,
} from "@sps/sps-third-parties/models/telegram/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";

export const handler = async (
  c: Context<any, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const query = c.req.query();

  if (!query?.["password"]) {
    throw new HTTPException(400, {
      message: "query password is required",
    });
  }

  const uuid = c.req.param("uuid");

  if (!uuid) {
    throw new HTTPException(400, {
      message: "Invalid id",
    });
  }

  const data = await model.services.findById({
    id: uuid,
    params: c.var.parsedQuery,
  });

  if (!data?.token) {
    throw new HTTPException(400, {
      message: "Invalid token",
    });
  }

  const telegram = new Telegram({ token: data.token, id: uuid });
  await telegram.stop();

  return c.json({
    data: "telegram bot launched",
  });
};
