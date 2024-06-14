import { model as telegramMessageModel } from "@sps/sps-third-parties-models-telegram-message-backend-model";
import { Context } from "telegraf";
import { Message, Update } from "telegraf/types";
import { getResponse as getWelcomeResponse } from "../../response-getters/welcome";

export async function handler(
  ctx: Context<Update.MessageUpdate<Message.TextMessage>>,
) {
  const chat = ctx.chat;

  if (chat.type !== "private") {
    return;
  }

  const welcomeResponseContent = await getWelcomeResponse();

  const welcomeMessage = await ctx.reply(welcomeResponseContent.text, {
    parse_mode: "HTML",
    reply_markup: welcomeResponseContent.replyMarkup,
  });

  const dbMessage = await telegramMessageModel.services.create({
    data: {
      from: ctx.botInfo.username,
      to: `${ctx.from.id}`,
      content: JSON.stringify(welcomeMessage),
    },
  });
}
