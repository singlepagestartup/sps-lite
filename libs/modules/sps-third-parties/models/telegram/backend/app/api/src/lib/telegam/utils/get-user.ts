import { Context, NarrowedContext, Telegram } from "telegraf";
import { CallbackQuery, Message, Update } from "telegraf/types";

export async function util({
  ctx,
}: {
  ctx:
    | Context<Update.MessageUpdate<Message.TextMessage>>
    | NarrowedContext<
        typeof Telegram & any,
        Update.CallbackQueryUpdate<CallbackQuery>
      >;
}) {
  //
}
