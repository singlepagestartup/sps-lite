import { model as telegramMessageModel } from "@sps/sps-third-parties-models-telegram-message-backend-model";
import { NarrowedContext, Telegram } from "telegraf";
import {
  CallbackQuery,
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
  Update,
} from "telegraf/types";

export async function util({
  ctx,
  dbMessageContentPattern,
  updatedContent,
}: {
  ctx: NarrowedContext<
    typeof Telegram & any,
    Update.CallbackQueryUpdate<CallbackQuery>
  >;
  dbMessageContentPattern: string;
  updatedContent: {
    text: string;
    replyMarkup: ReplyKeyboardMarkup | InlineKeyboardMarkup | undefined;
  };
}) {
  const dbMessages = await telegramMessageModel.services.findByContent({
    from: ctx.botInfo.username,
    to: `${ctx.from.id}`,
    contentPattern: dbMessageContentPattern,
  });

  try {
    if (dbMessages) {
      for (const dbMessage of dbMessages) {
        const dbMessageContent = JSON.parse(dbMessage.content);

        if (!dbMessageContent?.["message_id"]) {
          continue;
        }

        let updatedMessage: any;
        if (dbMessageContent?.["caption"]) {
          updatedMessage = await ctx.telegram.editMessageCaption(
            ctx.chat?.id,
            dbMessageContent?.["message_id"],
            undefined,
            updatedContent.text,
            {
              parse_mode: "HTML",
              reply_markup: updatedContent.replyMarkup as any,
            },
          );
        } else {
          updatedMessage = await ctx.telegram.editMessageText(
            ctx.chat?.id,
            dbMessageContent?.["message_id"],
            undefined,
            updatedContent.text,
            {
              parse_mode: "HTML",
              reply_markup: updatedContent.replyMarkup as any,
            },
          );
        }

        await telegramMessageModel.services.update({
          id: dbMessage.id,
          data: {
            ...dbMessage,
            content: JSON.stringify(updatedMessage),
          },
        });
      }
    }
  } catch (error: any) {
    console.error(`check-tasks ~ error:`, error?.["message"]);
  }
}
