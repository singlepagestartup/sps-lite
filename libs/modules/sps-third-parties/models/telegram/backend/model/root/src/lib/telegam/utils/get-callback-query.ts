import { NarrowedContext, Telegram } from "telegraf";
import { CallbackQuery, Update } from "telegraf/types";

export function util({
  ctx,
}: {
  ctx: NarrowedContext<
    typeof Telegram & any,
    Update.CallbackQueryUpdate<CallbackQuery>
  >;
}) {
  const query: any = ctx.callbackQuery;
  const callBackData = query?.["data"];

  if (typeof callBackData !== "string") {
    return;
  }

  return callBackData;
}
