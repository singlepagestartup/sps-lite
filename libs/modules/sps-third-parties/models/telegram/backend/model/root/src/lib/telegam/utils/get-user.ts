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
  // const user = await userModel.services.findOrCreateByTelegramId({
  //   telegramId: String(ctx.from.id),
  //   username: ctx.from.username || `${ctx.from.id}`,
  // });
  // if (!user) {
  //   throw new Error("User not found");
  // }
  // return user;
}
