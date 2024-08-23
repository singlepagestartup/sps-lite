import { Markup } from "telegraf";
import { InlineKeyboardMarkup } from "telegraf/types";

export async function getResponse() {
  const button = Markup.button.callback("🟠 Click again!", "button_clicked");

  const messageText = "Response message content.";
  const messageButtons: InlineKeyboardMarkup["inline_keyboard"] = [[button]];

  const replyKeyboard: InlineKeyboardMarkup["inline_keyboard"] = messageButtons;

  const replyMarkup: InlineKeyboardMarkup = {
    inline_keyboard: replyKeyboard,
  };

  return { text: messageText, replyMarkup };
}
