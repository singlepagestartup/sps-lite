import { model as telegramMessageModel } from "@sps/sps-third-parties-models-telegram-message-backend-model";
import { Context, NarrowedContext, Telegram } from "telegraf";
import { CallbackQuery, Message, Update } from "telegraf/types";
import { getResponse as buttonClickedResponse } from "../../../response-getters/button-clicked";

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

  const dbMessage = await telegramMessageModel.services.create({
    data: {
      from: ctx.botInfo.username,
      to: `${ctx.from.id}`,
      content: JSON.stringify(message),
    },
  });
}
