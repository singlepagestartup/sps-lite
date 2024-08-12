import { SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";
import { api as telegramMessageApi } from "@sps/sps-third-parties/models/telegram-message/sdk/server";
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
  if (!SPS_RBAC_SECRET_KEY) {
    throw new Error("SPS_RBAC_SECRET_KEY is not defined");
  }

  const dbMessages = await telegramMessageApi.find({
    params: {
      filters: {
        and: [
          {
            column: "from",
            method: "eq",
            value: ctx.botInfo.username,
          },
          {
            column: "to",
            method: "eq",
            value: ctx.from.id,
          },
          {
            column: "to",
            method: "like",
            value: dbMessageContentPattern,
          },
        ],
      },
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

        await telegramMessageApi.update({
          id: dbMessage.id,
          data: {
            from: ctx.botInfo.username,
            to: `${ctx.from.id}`,
            content: JSON.stringify(updatedMessage),
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
  } catch (error: any) {
    console.error(`check-tasks ~ error:`, error?.["message"]);
  }
}
