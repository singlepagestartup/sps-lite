import { api as telegramMessageApi } from "@sps/sps-third-parties/models/telegram-message/sdk/server";
import { Context } from "telegraf";
import { Message, Update } from "telegraf/types";
import { getResponse as getWelcomeResponse } from "../../response-getters/welcome";
import { SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";

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

  if (SPS_RBAC_SECRET_KEY) {
    const dbMessage = await telegramMessageApi.create({
      data: {
        from: ctx.botInfo.username,
        to: `${ctx.from.id}`,
        content: JSON.stringify(welcomeMessage),
      },
      options: {
        headers: {
          "X-rbac-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });
  }
}
