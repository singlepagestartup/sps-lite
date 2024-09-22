import { api as telegramMessageApi } from "@sps/sps-third-parties/models/telegram-message/sdk/server";
import { Context, NarrowedContext, Telegram } from "telegraf";
import { CallbackQuery, Message, Update } from "telegraf/types";
import { getResponse as buttonClickedResponse } from "../../../response-getters/button-clicked";
import { RBAC_SECRET_KEY } from "@sps/shared-utils";

export async function handler(
  ctx:
    | NarrowedContext<
        typeof Telegram & any,
        Update.CallbackQueryUpdate<CallbackQuery>
      >
    | Context<Update.MessageUpdate<Message.TextMessage>>,
) {
  const response = await buttonClickedResponse();

  const message = await ctx.reply(response.text, {
    parse_mode: "HTML",
    reply_markup: response.replyMarkup,
  });

  if (RBAC_SECRET_KEY) {
    const dbMessage = await telegramMessageApi.create({
      data: {
        from: ctx.botInfo.username,
        to: `${ctx.from.id}`,
        content: JSON.stringify(message),
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });
  }
}
