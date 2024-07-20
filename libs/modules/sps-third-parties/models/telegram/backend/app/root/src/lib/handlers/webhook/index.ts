import { HTTPException } from "hono/http-exception";
import {
  Telegram,
  model,
} from "@sps/sps-third-parties/models/telegram/backend/model/root";
import { Context } from "hono";
import { BlankInput, Next } from "hono/types";

import { Update } from "telegraf/types";

export const handler = async (
  c: Context<any, `${string}/:uuid`, BlankInput>,
  next: Next,
) => {
  const uuid = c.req.param("uuid");

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

  const data = await model.services.findById({
    id: uuid,
  });

  const json = c.var.parsedJson;

  if (!data?.token) {
    throw new HTTPException(400, {
      message: "Invalid token",
    });
  }

  const telegram = new Telegram({ token: data.token, id: uuid });
  await telegram.bot.handleUpdate(json as Update);

  return c.json({
    data: {
      ok: true,
    },
  });
};
