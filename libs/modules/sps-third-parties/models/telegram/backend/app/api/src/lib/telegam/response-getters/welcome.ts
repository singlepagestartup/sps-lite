import { Markup } from "telegraf";
import { InlineKeyboardMarkup, ReplyKeyboardMarkup } from "telegraf/types";

export async function getResponse() {
  const responseMessage = `Welcome to the Startup! 🚀`;

  const button = Markup.button.callback(`Button`, "button_clicked");

  const messageButtons: InlineKeyboardMarkup["inline_keyboard"] = [[button]];

  const replyKeyboard: InlineKeyboardMarkup["inline_keyboard"] = messageButtons;

  const replyMarkup: ReplyKeyboardMarkup = {
    keyboard: replyKeyboard,
    resize_keyboard: true,
    one_time_keyboard: false,
  };

  return { text: responseMessage, replyMarkup };
}
